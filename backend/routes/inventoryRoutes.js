// const express = require("express");

// const router = express.Router();

// const authMiddleware =
//   require("../middleware/authMiddleware");

// const {
//   createInventory,
//   getInventory,
// } = require(
//   "../controllers/inventoryController"
// );



// // CREATE INVENTORY
// router.post(
//   "/",
//   authMiddleware,
//   createInventory
// );



// // GET INVENTORY LOGS
// router.get(
//   "/",
//   authMiddleware,
//   getInventory
// );



// module.exports = router;





const express = require("express");

const router = express.Router();

const {
  updateInventory,
  getInventoryLogs,
} = require("../controllers/inventoryController");

const authMiddleware =
  require("../middleware/authMiddleware");



// UPDATE INVENTORY
router.post(
  "/",
  authMiddleware,
  updateInventory
);



// GET LOGS
router.get(
  "/",
  authMiddleware,
  getInventoryLogs
);

module.exports = router;