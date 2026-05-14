// const Product =
//   require("../models/Product");

// const InventoryLog =
//   require("../models/InventoryLog");



// // STOCK IN / OUT
// exports.updateStock =
//   async (req, res) => {

//     try {

//       const {
//         productId,
//         type,
//         quantity,
//         note,
//       } = req.body;


//       // FIND PRODUCT
//       const product =
//         await Product.findById(productId);

//       if (!product) {

//         return res.status(404).json({
//           error: "Product not found",
//         });

//       }



//       // STOCK IN
//       if (type === "IN") {

//         product.quantity +=
//           Number(quantity);

//       }


//       // STOCK OUT
//       else if (type === "OUT") {

//         if (
//           product.quantity <
//           quantity
//         ) {

//           return res.status(400).json({
//             error:
//               "Insufficient stock",
//           });

//         }

//         product.quantity -=
//           Number(quantity);

//       }



//       await product.save();




//       // CREATE LOG
//       await InventoryLog.create({

//         companyId: req.user.id,

//         productId:
//           product._id,

//         warehouseId:
//           product.warehouseId,

//         type,

//         quantity,

//         note,

//       });




//       res.json({
//         message:
//           "Inventory updated",
//       });

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({
//         error:
//           "Failed to update inventory",
//       });

//     }
//   };






// // GET LOGS
// exports.getLogs =
//   async (req, res) => {

//     try {

//       const logs =
//         await InventoryLog.find({
//           companyId: req.user.id,
//         })

//           .populate("productId")

//           .populate("warehouseId")

//           .sort({
//             createdAt: -1,
//           });

//       res.json(logs);

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({
//         error:
//           "Failed to fetch logs",
//       });

//     }
//   };
const Inventory = require("../models/InventoryLog");
const Product = require("../models/Product");



// CREATE INVENTORY LOG + UPDATE STOCK
exports.createInventory = async (req, res) => {

  try {

    const {
      productId,
      warehouseId,
      type,
      quantity,
      note,
    } = req.body;



    // VALIDATION
    if (
      !productId ||
      !warehouseId ||
      !type ||
      !quantity
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }



    // FIND PRODUCT INSIDE SELECTED WAREHOUSE
    const product =
      await Product.findOne({
        _id: productId,
        warehouseId,
      });



    // PRODUCT NOT FOUND
    if (!product) {

      return res.status(404).json({
        message:
          "Product not found in selected warehouse",
      });

    }



    // STOCK OUT VALIDATION
    if (
      type === "OUT" &&
      product.quantity < Number(quantity)
    ) {

      return res.status(400).json({
        message:
          "Insufficient stock available",
      });

    }



    // UPDATE STOCK
    if (type === "IN") {

      product.quantity =
        product.quantity + Number(quantity);

    } else {

      product.quantity =
        product.quantity - Number(quantity);

    }



    // SAVE UPDATED PRODUCT
    await product.save();



    // CREATE INVENTORY LOG
    const inventory =
      await Inventory.create({

        companyName:
          product.companyName,

        productId,

        warehouseId,

        type,

        quantity: Number(quantity),

        note,

      });



    // POPULATE RESPONSE
    const populatedInventory =
      await Inventory.findById(
        inventory._id
      )
        .populate("productId")
        .populate("warehouseId");



    res.status(201).json({
      message:
        "Inventory updated successfully",

      inventory:
        populatedInventory,
    });

  } catch (error) {

    console.log(
      "INVENTORY ERROR:"
    );

    console.log(error);



    res.status(500).json({
      message:
        "Failed to update inventory",

      error: error.message,
    });

  }
};



// GET ALL INVENTORY LOGS
exports.getInventory = async (req, res) => {

  try {

    const inventoryLogs =
      await Inventory.find()

        .populate("productId")

        .populate("warehouseId")

        .sort({ createdAt: -1 });



    res.json(inventoryLogs);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch inventory logs",
    });

  }
};