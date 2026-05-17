// const Product = require("../models/Product");


// // CREATE PRODUCT
// exports.createProduct = async (req, res) => {
//   try {

//     const {
//       warehouseId,
//       name,
//       sku,
//       price,
//       quantity,
//     } = req.body;

//     const product = await Product.create({
//       companyId: req.user.id,
//       warehouseId,
//       name,
//       sku,
//       price,
//       quantity,
//     });

//     res.status(201).json(product);

//   } catch (err) {

//     console.log(err);

//     res.status(500).json({
//       error: "Failed to create product",
//     });

//   }
// };




// // GET PRODUCTS
// exports.getProducts = async (req, res) => {

//   try {

//     const products = await Product.find({
//       companyId: req.user.id,
//     }).populate("warehouseId");

//     res.json(products);

//   } catch (err) {

//     console.log(err);

//     res.status(500).json({
//       error: "Failed to fetch products",
//     });

//   }
// };



// const Product =
//   require("../models/Product");




// // CREATE PRODUCT
// exports.createProduct =
//   async (req, res) => {

//     try {

//       const {
//         warehouseId,
//         name,
//         sku,
//         price,
//         quantity,
//       } = req.body;






//       const product =
//         await Product.create({

//           companyName:
//             req.user.companyName,

//           warehouseId,

//           name,

//           sku,

//           price,

//           quantity,

//         });






//       res.status(201).json(
//         product
//       );

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({

//         error:
//           "Failed to create product",

//       });

//     }
//   };










// // GET PRODUCTS
// exports.getProducts =
//   async (req, res) => {

//     try {

//       const products =
//         await Product.find({

//           companyName:
//             req.user.companyName,

//         }).populate(
//           "warehouseId"
//         );






//       res.json(products);

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({

//         error:
//           "Failed to fetch products",

//       });

//     }
//   };


const Product =
  require("../models/Product");

const Warehouse =
  require("../models/Warehouse");

const InventoryLog =
  require("../models/InventoryLog");

// ======================================
// CREATE PRODUCT
// ======================================
exports.createProduct =
  async (req, res) => {
    try {
      const {
        warehouseId,
        name,
        sku,
        price,
        quantity,
      } = req.body;

      // FIND WAREHOUSE
      const warehouse =
        await Warehouse.findById(
          warehouseId
        );

      if (!warehouse) {
        return res
          .status(404)
          .json({
            error:
              "Warehouse not found",
          });
      }

      // CREATE PRODUCT
      const product =
        await Product.create({
          companyName:
            req.user.companyName,

          warehouseId,

          name,

          sku,

          price,

          quantity,
        });

      // ======================================
      // CREATE INVENTORY LOG
      // ======================================
      await InventoryLog.create({
        companyName:
          req.user.companyName,

        productId:
          product._id,

        productName:
          product.name,

        productSKU:
          product.sku,

        warehouseId:
          warehouse._id,

        warehouseName:
          warehouse.name,

        type: "IN",

        quantity:
          product.quantity,

        previousStock: 0,

        updatedStock:
          product.quantity,

        performedBy:
          req.user.name ||
          "Admin",

        reason:
          "New Product Added",

        note:
          `${product.name} added to ${warehouse.name}`,
      });

      res.status(201).json(
        product
      );
    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to create product",
      });
    }
  };

// ======================================
// GET PRODUCTS
// ======================================
exports.getProducts =
  async (req, res) => {
    try {
      const products =
        await Product.find({
          companyName:
            req.user.companyName,
        }).populate(
          "warehouseId"
        );

      res.json(products);
    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to fetch products",
      });
    }
  };

// ======================================
// UPDATE PRODUCT
// ======================================
exports.updateProduct =
  async (req, res) => {
    try {
      const product =
        await Product.findById(
          req.params.id
        );

      if (!product) {
        return res
          .status(404)
          .json({
            error:
              "Product not found",
          });
      }

      const oldQuantity =
        product.quantity;

      // UPDATE FIELDS
      product.name =
        req.body.name ||
        product.name;

      product.sku =
        req.body.sku ||
        product.sku;

      product.price =
        req.body.price ||
        product.price;

      product.quantity =
        req.body.quantity ||
        product.quantity;

      await product.save();

      // FIND WAREHOUSE
      const warehouse =
        await Warehouse.findById(
          product.warehouseId
        );

      // STOCK DIFFERENCE
      const difference =
        product.quantity -
        oldQuantity;

      // CREATE LOG ONLY IF STOCK CHANGED
      if (difference !== 0) {
        await InventoryLog.create({
          companyName:
            req.user.companyName,

          productId:
            product._id,

          productName:
            product.name,

          productSKU:
            product.sku,

          warehouseId:
            warehouse._id,

          warehouseName:
            warehouse.name,

          type:
            difference > 0
              ? "IN"
              : "OUT",

          quantity:
            Math.abs(
              difference
            ),

          previousStock:
            oldQuantity,

          updatedStock:
            product.quantity,

          performedBy:
            req.user.name ||
            "Admin",

          reason:
            "Product Stock Updated",

          note:
            `${product.name} stock updated`,
        });
      }

      res.json(product);
    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to update product",
      });
    }
  };

// ======================================
// DELETE PRODUCT
// ======================================
exports.deleteProduct =
  async (req, res) => {
    try {
      const product =
        await Product.findById(
          req.params.id
        );

      if (!product) {
        return res
          .status(404)
          .json({
            error:
              "Product not found",
          });
      }

      const warehouse =
        await Warehouse.findById(
          product.warehouseId
        );

      // CREATE OUT LOG BEFORE DELETE
      await InventoryLog.create({
        companyName:
          req.user.companyName,

        productId:
          product._id,

        productName:
          product.name,

        productSKU:
          product.sku,

        warehouseId:
          warehouse._id,

        warehouseName:
          warehouse.name,

        type: "OUT",

        quantity:
          product.quantity,

        previousStock:
          product.quantity,

        updatedStock: 0,

        performedBy:
          req.user.name ||
          "Admin",

        reason:
          "Product Deleted",

        note:
          `${product.name} removed from inventory`,
      });

      await Product.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Product deleted successfully",
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to delete product",
      });
    }
  };