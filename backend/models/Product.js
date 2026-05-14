// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     companyId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     warehouseId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Warehouse",
//       required: true,
//     },

//     name: {
//       type: String,
//       required: true,
//     },

//     sku: {
//       type: String,
//       required: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     quantity: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model(
//   "Product",
//   productSchema
// );




const mongoose =
  require("mongoose");

const productSchema =
  new mongoose.Schema({

    companyName: {
      type: String,
      required: true,
    },

    warehouseId: {
      type:
        mongoose.Schema.Types.ObjectId,

      ref: "Warehouse",

      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      default: 0,
    },

  }, {
    timestamps: true,
  });

module.exports =
  mongoose.model(
    "Product",
    productSchema
  );