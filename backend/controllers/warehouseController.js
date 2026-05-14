// const Warehouse =
//   require("../models/Warehouse");



// // CREATE WAREHOUSE
// exports.createWarehouse =
//   async (req, res) => {

//     try {

//       console.log(req.user);

//       const warehouse =
//         await Warehouse.create({

//           ownerId:
//             req.user.id,

//           name:
//             req.body.name,

//           location:
//             req.body.location,

//           manager:
//             req.body.manager,

//         });

//       res.status(201).json(
//         warehouse
//       );

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({
//         error: err.message
//       });

//     }

// };




// // GET ALL WAREHOUSES
// exports.getWarehouses =
//   async (req, res) => {

//     try {

//       const warehouses =
//         await Warehouse.find({

//           ownerId:
//             req.user.id

//         });

//       res.json(warehouses);

//     } catch (err) {

//       console.log(err);

//       res.status(500).json({
//         error: err.message
//       });

//     }

// };


const Warehouse =
  require("../models/Warehouse");




// CREATE
exports.createWarehouse =
  async (req, res) => {

    try {

      const warehouse =
        await Warehouse.create({

          companyName:
            req.user.companyName,

          name:
            req.body.name,

          location:
            req.body.location,

          manager:
            req.body.manager,

        });

      res.status(201).json(
        warehouse
      );

    } catch (err) {

      console.log(err);

      res.status(500).json({
        error:
          "Failed to create warehouse",
      });

    }
  };








// GET
exports.getWarehouses =
  async (req, res) => {

    try {

      const warehouses =
        await Warehouse.find({

          companyName:
            req.user.companyName,

        });

      res.json(warehouses);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        error:
          "Failed to fetch warehouses",
      });

    }
  };