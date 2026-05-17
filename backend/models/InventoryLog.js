// const mongoose =
//   require("mongoose");

// const inventoryLogSchema =
//   new mongoose.Schema({

//     companyName: {
//       type: String,
//       required: true,
//     },






//     productId: {

//       type:
//         mongoose.Schema.Types.ObjectId,

//       ref: "Product",

//       required: true,

//     },






//     warehouseId: {

//       type:
//         mongoose.Schema.Types.ObjectId,

//       ref: "Warehouse",

//       required: true,

//     },






//     type: {

//       type: String,

//       enum: ["IN", "OUT"],

//       required: true,

//     },




//     quantity: {

//       type: Number,

//       required: true,

//     },


//     note: {

//       type: String,

//       default: "",

//     },

//   },

//   {
//     timestamps: true,
//   }
// );

// module.exports =
//   mongoose.model(
//     "InventoryLog",
//     inventoryLogSchema
//   );





// const mongoose = require("mongoose");

// const inventoryLogSchema =
//   new mongoose.Schema(
//     {
//       companyName: {
//         type: String,
//         required: true,
//       },

//       // PRODUCT INFO
//       productId: {
//         type:
//           mongoose.Schema.Types.ObjectId,

//         ref: "Product",

//         required: true,
//       },

//       productName: {
//         type: String,
//         required: true,
//       },

//       productSKU: {
//         type: String,
//         default: "",
//       },

//       category: {
//         type: String,
//         default: "",
//       },

//       // WAREHOUSE INFO
//       warehouseId: {
//         type:
//           mongoose.Schema.Types.ObjectId,

//         ref: "Warehouse",

//         required: true,
//       },

//       warehouseName: {
//         type: String,
//         required: true,
//       },

//       // INVENTORY OPERATION
//       type: {
//         type: String,

//         enum: [
//           "IN",
//           "OUT",
//           "TRANSFER_IN",
//           "TRANSFER_OUT",
//         ],

//         required: true,
//       },

//       quantity: {
//         type: Number,
//         required: true,
//       },

//       // STOCK DETAILS
//       previousStock: {
//         type: Number,
//         default: 0,
//       },

//       updatedStock: {
//         type: Number,
//         default: 0,
//       },

//       // TRANSFER DETAILS
//       transferWarehouse: {
//         type: String,
//         default: "",
//       },

//       // USER DETAILS
//       performedBy: {
//         type: String,
//         default: "",
//       },

//       // REASON / NOTE
//       reason: {
//         type: String,
//         default: "",
//       },

//       note: {
//         type: String,
//         default: "",
//       },

//       // STATUS
//       status: {
//         type: String,

//         enum: [
//           "SUCCESS",
//           "PENDING",
//           "FAILED",
//         ],

//         default: "SUCCESS",
//       },
//     },

//     {
//       timestamps: true,
//     }
//   );

// module.exports =
//   mongoose.model(
//     "InventoryLog",
//     inventoryLogSchema
//   );





const mongoose = require("mongoose");

const inventoryLogSchema =
  new mongoose.Schema(
    {
      companyName: {
        type: String,
        required: true,
      },

      productId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },

      warehouseId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Warehouse",
        required: true,
      },

      type: {
        type: String,
        enum: ["IN", "OUT"],
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
      },

      note: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "InventoryLog",
    inventoryLogSchema
  );