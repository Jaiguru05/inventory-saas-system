const mongoose =
  require("mongoose");

const transferSchema =
  new mongoose.Schema(

    {

      productId: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Product",

        required: true,

      },



      fromWarehouse: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Warehouse",

        required: true,

      },



      toWarehouse: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Warehouse",

        required: true,

      },



      quantity: {

        type: Number,

        required: true,

      },



      companyId: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

    },

    {
      timestamps: true,
    }

  );

module.exports =
  mongoose.model(
    "Transfer",
    transferSchema
  );