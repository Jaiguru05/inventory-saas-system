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
const InventoryLog = require("../models/InventoryLog");
const Product = require("../models/Product");
const Warehouse = require("../models/Warehouse");



// =========================================
// UPDATE INVENTORY
// =========================================
exports.updateInventory = async (req, res) => {
  try {
    const {
      productId,
      warehouseId,
      type,
      quantity,
      note,
    } = req.body;

    // VALIDATE
    if (
      !productId ||
      !warehouseId ||
      !type ||
      !quantity
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // FIND PRODUCT
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    // FIND WAREHOUSE
    const warehouse =
      await Warehouse.findById(warehouseId);

    if (!warehouse) {
      return res.status(404).json({
        error: "Warehouse not found",
      });
    }

    const qty = Number(quantity);

    // STOCK IN
    if (type === "IN") {
      product.quantity += qty;
    }

    // STOCK OUT
    else if (type === "OUT") {

      if (product.quantity < qty) {
        return res.status(400).json({
          error:
            "Not enough stock available",
        });
      }

      product.quantity -= qty;
    }

    // SAVE PRODUCT
    await product.save();

    // CREATE INVENTORY LOG
    const log =
      await InventoryLog.create({

        companyName:
          req.user.companyName,

        productId: product._id,

        warehouseId:
          warehouse._id,

        type,

        quantity: qty,

        note:
          note || type,

      });

    res.status(201).json({
      success: true,
      product,
      log,
    });

  } catch (err) {

    console.log(
      "INVENTORY ERROR:",
      err
    );

    res.status(500).json({
      error:
        "Failed to update inventory",
    });
  }
};



// =========================================
// GET INVENTORY LOGS
// =========================================
exports.getInventoryLogs =
  async (req, res) => {

    try {

      const logs =
        await InventoryLog.find({

          companyName:
            req.user.companyName,

        })
          .populate("productId")
          .populate("warehouseId")
          .sort({
            createdAt: -1,
          });

      res.json(logs);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        error:
          "Failed to fetch inventory logs",
      });
    }
  };