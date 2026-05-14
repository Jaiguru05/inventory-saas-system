const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");



// ================= REGISTER =================

const register = async (req, res) => {

  try {

    const {
      companyName,
      name,
      email,
      password
    } = req.body;


    // CHECK EXISTING USER
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        error: "User already exists"
      });

    }


    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);


    // CREATE USER
    await User.create({

      companyName,
      name,
      email,

      password:
        hashedPassword,

      role: "owner"

    });


    res.status(201).json({
      message:
        "Account created successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Server error"
    });

  }

};




// ================= LOGIN =================

const login = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    console.log("LOGIN DATA:", req.body);


    // FIND USER
    const user =
      await User.findOne({ email });

    console.log("FOUND USER:", user);

    if (!user) {

      return res.status(400).json({
        error: "Invalid email"
      });

    }


    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {

      return res.status(400).json({
        error: "Invalid password"
      });

    }


    // CREATE TOKEN
    const token = jwt.sign(

      {
        id: user._id,
        companyName: user.companyName,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );


    res.json({

      token,

      user: {

        id: user._id,

        companyName:
          user.companyName,

        name:
          user.name,

        email:
          user.email,

        role:
          user.role

      }

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Server error"
    });

  }

};




// EXPORTS
module.exports = {
  register,
  login
};