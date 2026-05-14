const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const userController =
  require("../controllers/userController");




// CREATE USER
router.post(
  "/",

  authMiddleware,

  roleMiddleware("owner"),

  userController.createUser
);




// GET USERS
router.get(
  "/",

  authMiddleware,

  roleMiddleware("owner"),

  userController.getUsers
);




// DELETE USER
router.delete(
  "/:id",

  authMiddleware,

  roleMiddleware("owner"),

  userController.deleteUser
);

module.exports = router;