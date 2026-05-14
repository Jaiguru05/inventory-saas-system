const mongoose =
  require("mongoose");

const inventoryLogSchema =
  new mongoose.Schema({

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