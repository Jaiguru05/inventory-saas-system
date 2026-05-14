// const mongoose = require("mongoose");

// const warehouseSchema = new mongoose.Schema({

//   ownerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },

//   name: {
//     type: String,
//     required: true,
//   },

//   location: {
//     type: String,
//     required: true,
//   },

//   manager: {
//     type: String,
//     required: true,
//   },

// }, {
//   timestamps: true,
// });

// module.exports =
//   mongoose.model(
//     "Warehouse",
//     warehouseSchema
//   );



const mongoose =
  require("mongoose");

const warehouseSchema =
  new mongoose.Schema({

    companyName: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    manager: {
      type: String,
      required: true,
    },

  }, {
    timestamps: true,
  });

module.exports =
  mongoose.model(
    "Warehouse",
    warehouseSchema
  );