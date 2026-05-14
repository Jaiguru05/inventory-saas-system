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



const Product =
  require("../models/Product");




// CREATE PRODUCT
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










// GET PRODUCTS
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