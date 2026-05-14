const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

const authMiddleware =
  require("../middleware/authMiddleware");

  const roleMiddleware =
  require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware(
    "owner",
    "manager"
  ),
  createProduct
);
router.get(
  "/",
  authMiddleware,
  getProducts
);

module.exports = router;


