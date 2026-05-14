// import { useEffect, useState } from "react";
// import axios from "axios";
// import DashboardLayout from "../layouts/DashboardLayout";

// const Inventory = () => {
//   const [products, setProducts] = useState([]);
//   const [warehouses, setWarehouses] =
//     useState([]);

//   const [inventoryLogs, setInventoryLogs] =
//     useState([]);

//   const [formData, setFormData] =
//     useState({
//       productId: "",
//       warehouseId: "",
//       type: "IN",
//       quantity: "",
//       note: "",
//     });

//   const token =
//     localStorage.getItem("token");



//   // FETCH PRODUCTS
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8000/api/products",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setProducts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };



//   // FETCH WAREHOUSES
//   const fetchWarehouses = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8000/api/warehouses",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setWarehouses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };



//   // FETCH INVENTORY LOGS
//   const fetchInventoryLogs = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8000/api/inventory",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setInventoryLogs(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };



//   useEffect(() => {
//   fetchInventoryLogs();
//   fetchProducts();
//   fetchWarehouses();

//   // eslint-disable-next-line
// }, []);




//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:8000/api/inventory",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Inventory updated");

//       setFormData({
//         productId: "",
//         warehouseId: "",
//         type: "IN",
//         quantity: "",
//         note: "",
//       });

//       fetchProducts();
//       fetchInventoryLogs();
//     } catch (err) {
//       console.log(err);

//       alert(
//         err.response?.data?.message ||
//           "Failed to update inventory"
//       );
//     }
//   };



//   return (
//     <DashboardLayout>
//       <div className="mb-10">
//         <h1 className="text-5xl font-bold">
//           Inventory
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Manage stock movements
//         </p>
//       </div>



//       {/* FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-2xl shadow mb-10"
//       >
//         <div className="grid md:grid-cols-5 gap-5">

//           {/* PRODUCT */}
//           <select
//             name="productId"
//             value={formData.productId}
//             onChange={handleChange}
//             className="border p-3 rounded-xl"
//             required
//           >
//             <option value="">
//               Select Product
//             </option>

//             {products.map((product) => (
//               <option
//                 key={product._id}
//                 value={product._id}
//               >
//                 {product.name}
//               </option>
//             ))}
//           </select>



//           {/* WAREHOUSE */}
//           <select
//             name="warehouseId"
//             value={formData.warehouseId}
//             onChange={handleChange}
//             className="border p-3 rounded-xl"
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



//           {/* TYPE */}
//           <select
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="border p-3 rounded-xl"
//           >
//             <option value="IN">
//               Stock In
//             </option>

//             <option value="OUT">
//               Stock Out
//             </option>
//           </select>



//           {/* QUANTITY */}
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="border p-3 rounded-xl"
//             required
//           />



//           {/* NOTE */}
//           <input
//             type="text"
//             name="note"
//             placeholder="Note"
//             value={formData.note}
//             onChange={handleChange}
//             className="border p-3 rounded-xl"
//           />
//         </div>



//         <button
//           type="submit"
//           className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl"
//         >
//           Update Inventory
//         </button>
//       </form>



//       {/* INVENTORY TABLE */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-5 text-left">
//                 Product
//               </th>

//               <th className="p-5 text-left">
//                 Type
//               </th>

//               <th className="p-5 text-left">
//                 Quantity
//               </th>

//               <th className="p-5 text-left">
//                 Warehouse
//               </th>

//               <th className="p-5 text-left">
//                 Note
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {inventoryLogs.map((item) => (
//               <tr
//                 key={item._id}
//                 className="border-t"
//               >
//                 <td className="p-5">
//                   {item.productId?.name}
//                 </td>

//                 <td className="p-5">
//                   {item.type}
//                 </td>

//                 <td className="p-5">
//                   {item.quantity}
//                 </td>

//                 <td className="p-5">
//                   {
//                     item.warehouseId?.name
//                   }
//                 </td>

//                 <td className="p-5">
//                   {item.note}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Inventory;


import { useEffect, useState, useCallback } from "react";

import axios from "axios";

import Layout from "../layouts/Layout";
const [products, setProducts] = useState([]);
const [warehouses, setWarehouses] = useState([]);

const Inventory = () => {

  const [products, setProducts] = useState([]);

  const [warehouses, setWarehouses] =
    useState([]);

  const [inventoryLogs, setInventoryLogs] =
    useState([]);

  const [formData, setFormData] =
    useState({
      productId: "",
      warehouseId: "",
      type: "IN",
      quantity: "",
      note: "",
    });

  const token =
    localStorage.getItem("token");



  // FETCH PRODUCTS
  const fetchProducts =
    useCallback(async () => {

      try {

        const res = await axios.get(
          "https://inventory-saas-system.onrender.com/api/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProducts(res.data);

      } catch (err) {

        console.log(err);

      }

    }, [token]);



  // FETCH WAREHOUSES
  const fetchWarehouses =
    useCallback(async () => {

      try {

        const res = await axios.get(
          "https://inventory-saas-system.onrender.com/api/warehouses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setWarehouses(res.data);

      } catch (err) {

        console.log(err);

      }

    }, [token]);



  // FETCH INVENTORY LOGS
  const fetchInventoryLogs =
    useCallback(async () => {

      try {

        const res = await axios.get(
          "https://inventory-saas-system.onrender.com/api/inventory",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setInventoryLogs(res.data);

      } catch (err) {

        console.log(err);

      }

    }, [token]);



  useEffect(() => {

    fetchProducts();
    fetchWarehouses();
    fetchInventoryLogs();

  }, [
    fetchProducts,
    fetchWarehouses,
    fetchInventoryLogs,
  ]);



  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };



  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://inventory-saas-system.onrender.com/api/inventory",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Inventory updated");

      setFormData({
        productId: "",
        warehouseId: "",
        type: "IN",
        quantity: "",
        note: "",
      });

      fetchProducts();
      fetchInventoryLogs();

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to update inventory"
      );

    }

  };



  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Inventory
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage stock movements
          </p>

        </div>



        {/* FORM */}
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

            {/* PRODUCT */}
            <select
              name="productId"
              value={formData.productId}
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
                Select Product
              </option>

              {products.map((product) => (

                <option
                  key={product._id}
                  value={product._id}
                >
                  {product.name}
                </option>

              ))}

            </select>



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



            {/* TYPE */}
            <select
              name="type"
              value={formData.type}
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
            >

              <option value="IN">
                Stock In
              </option>

              <option value="OUT">
                Stock Out
              </option>

            </select>



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



            {/* NOTE */}
            <input
              type="text"
              name="note"
              placeholder="Note"
              value={formData.note}
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
            Update Inventory
          </button>

        </form>



        {/* INVENTORY TABLE */}
        <div className="
          bg-white
          rounded-2xl
          shadow-sm
          border
          overflow-hidden
        ">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-5 text-left">
                    Product
                  </th>

                  <th className="p-5 text-left">
                    Type
                  </th>

                  <th className="p-5 text-left">
                    Quantity
                  </th>

                  <th className="p-5 text-left">
                    Warehouse
                  </th>

                  <th className="p-5 text-left">
                    Note
                  </th>

                </tr>

              </thead>



              <tbody>

                {inventoryLogs.map((item) => (

                  <tr
                    key={item._id}
                    className="
                      border-t
                      hover:bg-gray-50
                      transition
                    "
                  >

                    <td className="p-5">
                      {item.productId?.name}
                    </td>

                    <td className="p-5">

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-semibold
                          ${
                            item.type === "IN"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {item.type}
                      </span>

                    </td>

                    <td className="p-5 font-semibold">
                      {item.quantity}
                    </td>

                    <td className="p-5">
                      {item.warehouseId?.name}
                    </td>

                    <td className="p-5">
                      {item.note}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </Layout>

  );
};

export default Inventory;