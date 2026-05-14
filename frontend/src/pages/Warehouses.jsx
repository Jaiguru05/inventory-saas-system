// import { useEffect, useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";
// import API from "../services/api";

// export default function Warehouses() {
//   const [warehouses, setWarehouses] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     manager: "",
//   });

//   const fetchWarehouses = async () => {
//     try {
//       const res = await API.get("/warehouses");

//       setWarehouses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchWarehouses();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/warehouses", form);

//       setForm({
//         name: "",
//         location: "",
//         manager: "",
//       });

//       fetchWarehouses();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-4xl font-bold">
//             Warehouses
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Manage company warehouses
//           </p>
//         </div>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow mb-10"
//       >
//         <div className="grid md:grid-cols-3 gap-5">
//           <input
//             type="text"
//             placeholder="Warehouse Name"
//             className="border p-3 rounded-lg"
//             value={form.name}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 name: e.target.value,
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Location"
//             className="border p-3 rounded-lg"
//             value={form.location}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 location: e.target.value,
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Manager"
//             className="border p-3 rounded-lg"
//             value={form.manager}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 manager: e.target.value,
//               })
//             }
//           />
//         </div>

//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-5">
//           Create Warehouse
//         </button>
//       </form>

//       <div className="grid md:grid-cols-3 gap-6">
//         {warehouses.map((warehouse) => (
//           <div
//             key={warehouse._id}
//             className="bg-white p-6 rounded-xl shadow"
//           >
//             <h2 className="text-2xl font-bold">
//               {warehouse.name}
//             </h2>

//             <p className="text-gray-500 mt-2">
//               📍 {warehouse.location}
//             </p>

//             <p className="mt-2">
//               👤 {warehouse.manager}
//             </p>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// }



import {
  useEffect,
  useState,
  useCallback,
} from "react";

import Layout from "../layouts/Layout";

import API from "../services/api";

export default function Warehouses() {

  const [warehouses, setWarehouses] =
    useState([]);

  const [form, setForm] =
    useState({
      name: "",
      location: "",
      manager: "",
    });



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

    fetchWarehouses();

  }, [fetchWarehouses]);




  // HANDLE INPUT
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };




  // CREATE WAREHOUSE
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/warehouses",
        form
      );



      setForm({
        name: "",
        location: "",
        manager: "",
      });



      fetchWarehouses();

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.error ||
        "Failed to create warehouse"
      );

    }

  };




  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Warehouses
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage company warehouses
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {/* WAREHOUSE NAME */}
            <input
              type="text"
              name="name"
              placeholder="Warehouse Name"
              value={form.name}
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



            {/* LOCATION */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
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



            {/* MANAGER */}
            <input
              type="text"
              name="manager"
              placeholder="Manager"
              value={form.manager}
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
            Create Warehouse
          </button>

        </form>



        {/* WAREHOUSE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {warehouses.map((warehouse) => (

            <div
              key={warehouse._id}
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

              {/* NAME */}
              <div className="mb-5">

                <h2 className="text-2xl font-bold text-gray-900">
                  {warehouse.name}
                </h2>

              </div>



              {/* DETAILS */}
              <div className="space-y-3">

                {/* LOCATION */}
                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    Location
                  </span>

                  <span className="font-medium text-right">
                    📍 {warehouse.location}
                  </span>

                </div>



                {/* MANAGER */}
                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    Manager
                  </span>

                  <span className="font-medium text-right">
                    👤 {warehouse.manager}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Layout>

  );

}