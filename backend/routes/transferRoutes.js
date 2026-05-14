const express =
  require("express");

const router =
  express.Router();




// CONTROLLERS
const {

  createTransfer,

  getTransfers,

} = require(
  "../controllers/transferController"
);




// MIDDLEWARE
const authMiddleware =
  require("../middleware/authMiddleware");




// CREATE TRANSFER
router.post(
  "/",
  authMiddleware,
  createTransfer
);




// GET TRANSFERS
router.get(
  "/",
  authMiddleware,
  getTransfers
);




module.exports =
  router;