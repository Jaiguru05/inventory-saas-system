// import { useEffect, useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import API from "../services/api";

// const Products = () => {

//   const [products, setProducts] =
//     useState([]);

//   const [warehouses, setWarehouses] =
//     useState([]);

//   const [formData, setFormData] =
//     useState({
//       warehouseId: "",
//       name: "",
//       sku: "",
//       price: "",
//       quantity: "",
//     });




//   // FETCH PRODUCTS
//   const fetchProducts = async () => {

//     try {

//       const res =
//         await API.get("/products");

//       setProducts(res.data);

//     } catch (err) {

//       console.log(err);

//     }
//   };




//   // FETCH WAREHOUSES
//   const fetchWarehouses = async () => {

//     try {

//       const res =
//         await API.get("/warehouses");

//       setWarehouses(res.data);

//     } catch (err) {

//       console.log(err);

//     }
//   };




//   // LOAD DATA
//   useEffect(() => {

//     fetchProducts();

//     fetchWarehouses();

//   }, []);





//   // HANDLE INPUT CHANGE
//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]:
//         e.target.value,

//     });

//   };






//   // CREATE PRODUCT
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       await API.post(
//         "/products",
//         formData
//       );



//       setFormData({
//         warehouseId: "",
//         name: "",
//         sku: "",
//         price: "",
//         quantity: "",
//       });



//       fetchProducts();

//     } catch (err) {

//       console.log(err);

//       alert("Failed to create product");

//     }
//   };






//   return (

//     <DashboardLayout>

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-10">

//         <div>

//           <h1 className="text-4xl font-bold">
//             Products
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Manage inventory products
//           </p>

//         </div>

//       </div>





//       {/* PRODUCT FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow mb-10"
//       >

//         <div className="grid md:grid-cols-5 gap-5">


//           {/* WAREHOUSE */}
//           <select
//             name="warehouseId"
//             value={formData.warehouseId}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           >

//             <option value="">
//               Select Warehouse
//             </option>

//             {warehouses.map((warehouse) => (

//               <option
//                 key={warehouse._id}
//                 value={warehouse._id}
//               >
//                 {warehouse.name}
//               </option>

//             ))}

//           </select>





//           {/* PRODUCT NAME */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />





//           {/* SKU */}
//           <input
//             type="text"
//             name="sku"
//             placeholder="SKU"
//             value={formData.sku}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />





//           {/* PRICE */}
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />






//           {/* QUANTITY */}
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />

//         </div>





//         {/* BUTTON */}
//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-5"
//         >
//           Add Product
//         </button>

//       </form>








//       {/* PRODUCT LIST */}
//       <div className="grid md:grid-cols-3 gap-6">

//         {products.map((product) => (

//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-xl shadow"
//           >

//             <h2 className="text-2xl font-bold">
//               {product.name}
//             </h2>

//             <p className="text-gray-500 mt-2">
//               SKU: {product.sku}
//             </p>

//             <p className="mt-2 font-medium">
//               ₹ {product.price}
//             </p>

//             <p className="mt-1">
//               Qty: {product.quantity}
//             </p>

//             <p className="text-sm text-gray-500 mt-3">
//               Warehouse:
//               {" "}
//               {product.warehouseId?.name}
//             </p>

//           </div>

//         ))}

//       </div>

//     </DashboardLayout>

//   );
// };

// export default Products;




import {
  useEffect,
  useState,
  useCallback,
} from "react";

import Layout from "../layouts/Layout";

import API from "../services/api";

const Products = () => {

  const [products, setProducts] =
    useState([]);

  const [warehouses, setWarehouses] =
    useState([]);

  const [formData, setFormData] =
    useState({
      warehouseId: "",
      name: "",
      sku: "",
      price: "",
      quantity: "",
    });



  // FETCH PRODUCTS
  const fetchProducts =
    useCallback(async () => {

      try {

        const res =
          await API.get("/products");

        setProducts(res.data);

      } catch (err) {

        console.log(err);

      }

    }, []);




  // FETCH WAREHOUSES
  const fetchWarehouses =
    useCallback(async () => {

      try {

        const res =
          await API.get("/warehouses");

        setWarehouses(res.data);

      } catch (err) {

        console.log(err);

      }

    }, []);




  // LOAD DATA
  useEffect(() => {

    fetchProducts();
    fetchWarehouses();

  }, [
    fetchProducts,
    fetchWarehouses,
  ]);




  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };




  // CREATE PRODUCT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/products",
        formData
      );



      setFormData({
        warehouseId: "",
        name: "",
        sku: "",
        price: "",
        quantity: "",
      });



      fetchProducts();

    } catch (err) {

      console.log(err);

      alert("Failed to create product");

    }

  };




  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage inventory products
          </p>

        </div>



        {/* PRODUCT FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            p-6
            rounded-2xl
            shadow-sm
            border
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* WAREHOUSE */}
            <select
              name="warehouseId"
              value={formData.warehouseId}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            >

              <option value="">
                Select Warehouse
              </option>

              {warehouses.map((warehouse) => (

                <option
                  key={warehouse._id}
                  value={warehouse._id}
                >
                  {warehouse.name}
                </option>

              ))}

            </select>



            {/* PRODUCT NAME */}
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* SKU */}
            <input
              type="text"
              name="sku"
              placeholder="SKU"
              value={formData.sku}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* PRICE */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* QUANTITY */}
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />

          </div>



          {/* BUTTON */}
          <button
            type="submit"
            className="
              mt-6
              bg-indigo-600
              hover:bg-indigo-700
              transition
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            Add Product
          </button>

        </form>



        {/* PRODUCT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {products.map((product) => (

            <div
              key={product._id}
              className="
                bg-white
                rounded-2xl
                shadow-sm
                border
                p-6
                hover:shadow-md
                transition
              "
            >

              {/* PRODUCT NAME */}
              <div className="mb-4">

                <h2 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  SKU: {product.sku}
                </p>

              </div>



              {/* DETAILS */}
              <div className="space-y-2">

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Price
                  </span>

                  <span className="font-semibold">
                    ₹ {product.price}
                  </span>

                </div>



                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Quantity
                  </span>

                  <span className="font-semibold">
                    {product.quantity}
                  </span>

                </div>



                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Warehouse
                  </span>

                  <span className="font-medium text-right">
                    {product.warehouseId?.name}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Layout>

  );

};

export default Products;