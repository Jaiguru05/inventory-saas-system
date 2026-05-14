const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const warehouseController =
  require("../controllers/warehouseController");




// CREATE WAREHOUSE
router.post(
  "/",

  authMiddleware,

  roleMiddleware(
    "owner",
    "manager"
  ),

  warehouseController.createWarehouse
);




// GET ALL WAREHOUSES
router.get(
  "/",

  authMiddleware,

  warehouseController.getWarehouses
);

module.exports = router;