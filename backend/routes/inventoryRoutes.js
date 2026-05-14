const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  createInventory,
  getInventory,
} = require(
  "../controllers/inventoryController"
);



// CREATE INVENTORY
router.post(
  "/",
  authMiddleware,
  createInventory
);



// GET INVENTORY LOGS
router.get(
  "/",
  authMiddleware,
  getInventory
);



module.exports = router;