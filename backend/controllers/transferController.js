const Transfer = require("../models/Transfer");
const Product = require("../models/Product");



// CREATE TRANSFER
exports.createTransfer = async (req, res) => {
  try {
    const {
      productId,
      fromWarehouse,
      toWarehouse,
      quantity,
    } = req.body;

    // VALIDATION
    if (
      !productId ||
      !fromWarehouse ||
      !toWarehouse ||
      !quantity
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // SAME WAREHOUSE CHECK
    if (fromWarehouse === toWarehouse) {
      return res.status(400).json({
        message:
          "Source and destination warehouses cannot be same",
      });
    }

    // FIND SOURCE PRODUCT
    const sourceProduct = await Product.findOne({
      _id: productId,
      warehouseId: fromWarehouse,
    });

    if (!sourceProduct) {
      return res.status(404).json({
        message:
          "Product not found in source warehouse",
      });
    }

    // STOCK CHECK
    if (sourceProduct.quantity < Number(quantity)) {
      return res.status(400).json({
        message: "Insufficient stock",
      });
    }

    // REDUCE SOURCE STOCK
    sourceProduct.quantity =
      sourceProduct.quantity - Number(quantity);

    await sourceProduct.save();

    // FIND DESTINATION PRODUCT
    let destinationProduct =
      await Product.findOne({
        name: sourceProduct.name,
        warehouseId: toWarehouse,
      });

    // IF PRODUCT EXISTS IN DESTINATION
    if (destinationProduct) {
      destinationProduct.quantity =
        destinationProduct.quantity +
        Number(quantity);

      await destinationProduct.save();
    }

    // CREATE NEW PRODUCT IN DESTINATION
    else {
      destinationProduct =
    await Product.create({
    companyName: sourceProduct.companyName,
    warehouseId: toWarehouse,
    name: sourceProduct.name,
    sku: sourceProduct.sku,
    price: sourceProduct.price,
    quantity: Number(quantity),
  });
    }

    // CREATE TRANSFER RECORD
    const transfer = await Transfer.create({
      productId: sourceProduct._id,
      fromWarehouse,
      toWarehouse,
      quantity,
    });

    res.status(201).json({
      message: "Transfer successful",
      transfer,
    });
  } catch (error) {
    console.log("TRANSFER ERROR:");
    console.log(error);

    res.status(500).json({
      message:
        "Server error while transferring product",
      error: error.message,
    });
  }
};



// GET ALL TRANSFERS
exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find()
      .populate("productId")
      .populate("fromWarehouse")
      .populate("toWarehouse")
      .sort({ createdAt: -1 });

    res.json(transfers);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch transfers",
    });
  }
};