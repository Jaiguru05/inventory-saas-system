const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

require("dotenv").config();

const app = express();

const productRoutes =
  require("./routes/productRoutes");
const inventoryRoutes =
  require("./routes/inventoryRoutes");

const transferRoutes =
  require("./routes/transferRoutes");

const userRoutes =
  require("./routes/userRoutes");

// MIDDLEWARES
app.use(cors());

app.use(express.json());



// ROUTES
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/warehouses",
  require("./routes/warehouseRoutes")
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/inventory",
  inventoryRoutes
);

app.use(
  "/api/transfers",
  transferRoutes
);

app.use(
  "/api/users",
  userRoutes
);




// MONGODB
mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {

  console.log(
    "MongoDB Connected ✅"
  );

})
.catch((err) => {

  console.log(err);

});


app.get("/", (req, res) => {
  res.send("Inventory SaaS Backend Running");
});



// SERVER
const PORT =
  process.env.PORT || 8000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});