// const jwt =
//   require("jsonwebtoken");

// module.exports =
//   (req, res, next) => {

//     try {

//       const token =
//         req.header("Authorization");

//       if (!token) {

//         return res.status(401).json({
//           error: "No token"
//         });

//       }

//       const actualToken =
//         token.replace(
//           "Bearer ",
//           ""
//         );

//       const decoded =
//         jwt.verify(
//           actualToken,
//           process.env.JWT_SECRET
//         );

//       req.user = decoded;

//       next();

//     } catch (err) {

//       console.log(err);

//       res.status(401).json({
//         error: "Invalid token"
//       });

//     }

// };

const jwt = require("jsonwebtoken");

const User =
  require("../models/User");

module.exports =
  async (req, res, next) => {

    try {

      const token =
        req.header("Authorization")
          ?.replace(
            "Bearer ",
            ""
          );

      if (!token) {

        return res.status(401).json({
          error:
            "No token",
        });

      }

      const decoded =
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

      const user =
        await User.findById(
          decoded.id
        );

      if (!user) {

        return res.status(401).json({
          error:
            "User not found",
        });

      }

      req.user = user;

      next();

    } catch (err) {

      res.status(401).json({
        error:
          "Invalid token",
      });

    }
  };