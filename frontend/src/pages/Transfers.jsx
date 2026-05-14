// import { useEffect, useState }
// from "react";

// import DashboardLayout
// from "../layouts/DashboardLayout";

// import API from "../services/api";

// const Transfers = () => {

//   const [products, setProducts] =
//     useState([]);

//   const [warehouses, setWarehouses] =
//     useState([]);

//   const [transfers, setTransfers] =
//     useState([]);

//   const [formData, setFormData] =
//     useState({
//       productId: "",
//       fromWarehouse: "",
//       toWarehouse: "",
//       quantity: "",
//     });





//   const fetchProducts =
//     async () => {

//       try {

//         const res =
//           await API.get("/products");

//         setProducts(res.data);

//       } catch (err) {

//         console.log(err);

//       }
//     };






//   const fetchWarehouses =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/warehouses"
//           );

//         setWarehouses(res.data);

//       } catch (err) {

//         console.log(err);

//       }
//     };







//   const fetchTransfers =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/transfers"
//           );

//         setTransfers(res.data);

//       } catch (err) {

//         console.log(err);

//       }
//     };








//   useEffect(() => {

//     fetchProducts();

//     fetchWarehouses();

//     fetchTransfers();

//   }, []);









//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         await API.post(
//           "/transfers",
//           formData
//         );



//         setFormData({

//           productId: "",

//           fromWarehouse: "",

//           toWarehouse: "",

//           quantity: "",

//         });




//         fetchProducts();

//         fetchTransfers();

//       } catch (err) {

//         console.log(err);

//         alert(
//         err.response?.data?.error ||
//         "Transfer failed"
// );

//       }
//     };










//   return (

//     <DashboardLayout>

//       <h1 className="text-4xl font-bold mb-2">
//         Transfers
//       </h1>

//       <p className="text-gray-500 mb-8">
//         Move products between warehouses
//       </p>








//       {/* FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow mb-10"
//       >

//         <div className="grid md:grid-cols-4 gap-5">


//           {/* PRODUCT */}
//           <select
//             className="border p-3 rounded-lg"
//             value={formData.productId}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 productId:
//                   e.target.value,
//               })
//             }
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








//           {/* FROM */}
//           <select
//             className="border p-3 rounded-lg"
//             value={formData.fromWarehouse}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 fromWarehouse:
//                   e.target.value,
//               })
//             }
//           >

//             <option value="">
//               From Warehouse
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








//           {/* TO */}
//           <select
//             className="border p-3 rounded-lg"
//             value={formData.toWarehouse}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 toWarehouse:
//                   e.target.value,
//               })
//             }
//           >

//             <option value="">
//               To Warehouse
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








//           {/* QUANTITY */}
//           <input
//             type="number"
//             placeholder="Quantity"
//             className="border p-3 rounded-lg"
//             value={formData.quantity}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 quantity:
//                   e.target.value,
//               })
//             }
//           />

//         </div>








//         <button
//           className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-5"
//         >
//           Transfer Product
//         </button>

//       </form>









//       {/* TRANSFER TABLE */}
//       <div className="bg-white rounded-xl shadow overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-gray-100">

//             <tr>

//               <th className="p-4 text-left">
//                 Product
//               </th>

//               <th className="p-4 text-left">
//                 From
//               </th>

//               <th className="p-4 text-left">
//                 To
//               </th>

//               <th className="p-4 text-left">
//                 Quantity
//               </th>

//             </tr>

//           </thead>






//           <tbody>

//             {transfers.map((transfer) => (

//               <tr
//                 key={transfer._id}
//                 className="border-t"
//               >

//                 <td className="p-4">
//                   {transfer.productId?.name}
//                 </td>

//                 <td className="p-4">
//                   {
//                     transfer.fromWarehouse
//                       ?.name
//                   }
//                 </td>

//                 <td className="p-4">
//                   {
//                     transfer.toWarehouse
//                       ?.name
//                   }
//                 </td>

//                 <td className="p-4">
//                   {transfer.quantity}
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </DashboardLayout>

//   );
// };

// export default Transfers;




import {
  useEffect,
  useState,
  useCallback,
} from "react";

import Layout from "../layouts/Layout";

import API from "../services/api";

const Transfers = () => {

  const [products, setProducts] =
    useState([]);

  const [warehouses, setWarehouses] =
    useState([]);

  const [transfers, setTransfers] =
    useState([]);

  const [formData, setFormData] =
    useState({
      productId: "",
      fromWarehouse: "",
      toWarehouse: "",
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
          await API.get(
            "/warehouses"
          );

        setWarehouses(res.data);

      } catch (err) {

        console.log(err);

      }

    }, []);




  // FETCH TRANSFERS
  const fetchTransfers =
    useCallback(async () => {

      try {

        const res =
          await API.get(
            "/transfers"
          );

        setTransfers(res.data);

      } catch (err) {

        console.log(err);

      }

    }, []);




  // LOAD DATA
  useEffect(() => {

    fetchProducts();
    fetchWarehouses();
    fetchTransfers();

  }, [
    fetchProducts,
    fetchWarehouses,
    fetchTransfers,
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
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/transfers",
          formData
        );



        setFormData({
          productId: "",
          fromWarehouse: "",
          toWarehouse: "",
          quantity: "",
        });



        fetchProducts();
        fetchTransfers();

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data?.error ||
          "Transfer failed"
        );

      }

    };




  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Transfers
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Move products between warehouses
          </p>

        </div>



        {/* TRANSFER FORM */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

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



            {/* FROM */}
            <select
              name="fromWarehouse"
              value={formData.fromWarehouse}
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
                From Warehouse
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



            {/* TO */}
            <select
              name="toWarehouse"
              value={formData.toWarehouse}
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
                To Warehouse
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
            Transfer Product
          </button>

        </form>



        {/* TRANSFER TABLE */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            overflow-hidden
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-5 text-left">
                    Product
                  </th>

                  <th className="p-5 text-left">
                    From Warehouse
                  </th>

                  <th className="p-5 text-left">
                    To Warehouse
                  </th>

                  <th className="p-5 text-left">
                    Quantity
                  </th>

                </tr>

              </thead>



              <tbody>

                {transfers.map((transfer) => (

                  <tr
                    key={transfer._id}
                    className="
                      border-t
                      hover:bg-gray-50
                      transition
                    "
                  >

                    <td className="p-5 font-medium">
                      {transfer.productId?.name}
                    </td>

                    <td className="p-5">
                      {
                        transfer.fromWarehouse
                          ?.name
                      }
                    </td>

                    <td className="p-5">
                      {
                        transfer.toWarehouse
                          ?.name
                      }
                    </td>

                    <td className="p-5 font-semibold">
                      {transfer.quantity}
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

export default Transfers;