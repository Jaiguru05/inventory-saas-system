// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({

//   companyName: {
//     type: String,
//     required: true,
//   },

//   name: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   role: {
//     type: String,
//     default: "owner",
//   },

// }, {
//   timestamps: true,
// });

// module.exports =
//   mongoose.model(
//     "User",
//     userSchema
//   );


const mongoose =
  require("mongoose");

const userSchema =
  new mongoose.Schema({

    companyName: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,

      enum: [
        "owner",
        "manager",
        "staff",
      ],

      default: "staff",
    },

  });

module.exports =
  mongoose.model(
    "User",
    userSchema
  );