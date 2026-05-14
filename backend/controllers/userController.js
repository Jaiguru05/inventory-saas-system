const User =
  require("../models/User");

const bcrypt =
  require("bcryptjs");




// CREATE USER
exports.createUser =
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
        role,
      } = req.body;





      // CHECK EXISTING USER
      const existingUser =
        await User.findOne({
          email,
        });

      if (existingUser) {

        return res.status(400).json({
          error:
            "User already exists",
        });

      }







      // HASH PASSWORD
      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );








      // CREATE USER
      const user =
        await User.create({

          companyName:
            req.user.companyName,

          name,

          email,

          password:
            hashedPassword,

          role,

        });








      res.status(201).json(
        user
      );

    } catch (err) {

      console.log(err);

      res.status(500).json({

        error:
          "Failed to create user",

      });

    }
  };









// GET USERS
exports.getUsers =
  async (req, res) => {

    try {

      const users =
        await User.find({

          companyName:
            req.user.companyName,

        }).select("-password");






      res.json(users);

    } catch (err) {

      console.log(err);

      res.status(500).json({

        error:
          "Failed to fetch users",

      });

    }
  };









// DELETE USER
exports.deleteUser =
  async (req, res) => {

    try {

      await User.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "User deleted",

      });

    } catch (err) {

      console.log(err);

      res.status(500).json({

        error:
          "Failed to delete user",

      });

    }
  };