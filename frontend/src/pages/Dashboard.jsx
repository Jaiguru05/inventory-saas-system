// import { useEffect, useState } from "react";

// import axios from "axios";

// import DashboardLayout from "../layouts/DashboardLayout";

// import {
//   Warehouse,
//   Package,
//   ArrowLeftRight,
//   ClipboardList,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const Dashboard = () => {

//   const [stats, setStats] = useState({
//     warehouses: 0,
//     products: 0,
//     transfers: 0,
//     inventoryLogs: 0,
//   });

//   const [warehouseStock, setWarehouseStock] =
//     useState([]);

//   const [inventoryData, setInventoryData] =
//     useState([]);

//   const [recentTransfers, setRecentTransfers] =
//     useState([]);

//   const token =
//     localStorage.getItem("token");



//   const fetchDashboardData = async () => {

//     try {

//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };



//       // FETCH DATA
//       const [
//         warehouseRes,
//         productRes,
//         transferRes,
//         inventoryRes,
//       ] = await Promise.all([
//         axios.get(
//           "http://localhost:8000/api/warehouses",
//           { headers }
//         ),

//         axios.get(
//           "http://localhost:8000/api/products",
//           { headers }
//         ),

//         axios.get(
//           "http://localhost:8000/api/transfers",
//           { headers }
//         ),

//         axios.get(
//           "http://localhost:8000/api/inventory",
//           { headers }
//         ),
//       ]);



//       // STATS
//       setStats({
//         warehouses:
//           warehouseRes.data.length,

//         products:
//           productRes.data.length,

//         transfers:
//           transferRes.data.length,

//         inventoryLogs:
//           inventoryRes.data.length,
//       });



//       // WAREHOUSE STOCK GRAPH
//       const stockData =
//         warehouseRes.data.map(
//           (warehouse) => {

//             const warehouseProducts =
//               productRes.data.filter(
//                 (product) =>
//                   product.warehouseId?._id ===
//                   warehouse._id
//               );

//             const totalStock =
//               warehouseProducts.reduce(
//                 (acc, product) =>
//                   acc + product.quantity,
//                 0
//               );

//             return {
//               name: warehouse.name,
//               stock: totalStock,
//             };
//           }
//         );

//       setWarehouseStock(stockData);



//       // INVENTORY PIE DATA
//       const inCount =
//         inventoryRes.data.filter(
//           (item) => item.type === "IN"
//         ).length;

//       const outCount =
//         inventoryRes.data.filter(
//           (item) => item.type === "OUT"
//         ).length;

//       setInventoryData([
//         {
//           name: "Stock In",
//           value: inCount,
//         },
//         {
//           name: "Stock Out",
//           value: outCount,
//         },
//       ]);



//       // RECENT TRANSFERS
//       setRecentTransfers(
//         transferRes.data.slice(0, 5)
//       );

//     } catch (err) {

//       console.log(err);

//     }
//   };


// // eslint-disable-next-line
//   useEffect(() => {
//     fetchDashboardData();
//   }, []);




//   return (
//     <DashboardLayout>

//       {/* PAGE TITLE */}
//       <div className="mb-10">

//         <h1 className="text-5xl font-bold">
//           Dashboard
//         </h1>

//         <p className="text-gray-500 mt-2 text-lg">
//           Inventory system overview
//         </p>

//       </div>



//       {/* STATS */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">

//         <div className="bg-white p-6 rounded-2xl shadow">
//           <div className="flex items-center gap-4">

//             <div className="bg-indigo-100 p-4 rounded-xl">
//               <Warehouse
//                 size={32}
//                 className="text-indigo-600"
//               />
//             </div>

//             <div>
//               <p className="text-gray-500">
//                 Warehouses
//               </p>

//               <h2 className="text-3xl font-bold">
//                 {stats.warehouses}
//               </h2>
//             </div>

//           </div>
//         </div>



//         <div className="bg-white p-6 rounded-2xl shadow">
//           <div className="flex items-center gap-4">

//             <div className="bg-green-100 p-4 rounded-xl">
//               <Package
//                 size={32}
//                 className="text-green-600"
//               />
//             </div>

//             <div>
//               <p className="text-gray-500">
//                 Products
//               </p>

//               <h2 className="text-3xl font-bold">
//                 {stats.products}
//               </h2>
//             </div>

//           </div>
//         </div>



//         <div className="bg-white p-6 rounded-2xl shadow">
//           <div className="flex items-center gap-4">

//             <div className="bg-yellow-100 p-4 rounded-xl">
//               <ArrowLeftRight
//                 size={32}
//                 className="text-yellow-600"
//               />
//             </div>

//             <div>
//               <p className="text-gray-500">
//                 Transfers
//               </p>

//               <h2 className="text-3xl font-bold">
//                 {stats.transfers}
//               </h2>
//             </div>

//           </div>
//         </div>



//         <div className="bg-white p-6 rounded-2xl shadow">
//           <div className="flex items-center gap-4">

//             <div className="bg-red-100 p-4 rounded-xl">
//               <ClipboardList
//                 size={32}
//                 className="text-red-600"
//               />
//             </div>

//             <div>
//               <p className="text-gray-500">
//                 Inventory Logs
//               </p>

//               <h2 className="text-3xl font-bold">
//                 {stats.inventoryLogs}
//               </h2>
//             </div>

//           </div>
//         </div>

//       </div>



//       {/* CHARTS */}
//       <div className="grid md:grid-cols-2 gap-8 mb-10">

//         {/* BAR CHART */}
//         <div className="bg-white p-6 rounded-2xl shadow">

//           <h2 className="text-2xl font-bold mb-6">
//             Warehouse Stock
//           </h2>

//           <ResponsiveContainer
//             width="100%"
//             height={350}
//           >

//             <BarChart data={warehouseStock}>

//               <XAxis dataKey="name" />

//               <YAxis />

//               <Tooltip />

//               <Bar
//                 dataKey="stock"
//                 fill="#4f46e5"
//                 radius={[10, 10, 0, 0]}
//               />

//             </BarChart>

//           </ResponsiveContainer>

//         </div>



//         {/* PIE CHART */}
//         <div className="bg-white p-6 rounded-2xl shadow">

//           <h2 className="text-2xl font-bold mb-6">
//             Inventory Flow
//           </h2>

//           <ResponsiveContainer
//             width="100%"
//             height={350}
//           >

//             <PieChart>

//               <Pie
//                 data={inventoryData}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={120}
//                 label
//               >

//                 <Cell fill="#4f46e5" />

//                 <Cell fill="#ef4444" />

//               </Pie>

//               <Tooltip />

//             </PieChart>

//           </ResponsiveContainer>

//         </div>

//       </div>



//       {/* RECENT TRANSFERS */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">

//         <div className="p-6 border-b">

//           <h2 className="text-3xl font-bold">
//             Recent Transfers
//           </h2>

//         </div>



//         <table className="w-full">

//           <thead className="bg-gray-100">

//             <tr>

//               <th className="text-left p-5">
//                 Product
//               </th>

//               <th className="text-left p-5">
//                 From
//               </th>

//               <th className="text-left p-5">
//                 To
//               </th>

//               <th className="text-left p-5">
//                 Quantity
//               </th>

//             </tr>

//           </thead>



//           <tbody>

//             {recentTransfers.map(
//               (transfer) => (

//                 <tr
//                   key={transfer._id}
//                   className="border-t"
//                 >

//                   <td className="p-5">
//                     {
//                       transfer.productId
//                         ?.name
//                     }
//                   </td>

//                   <td className="p-5">
//                     {
//                       transfer.fromWarehouseId
//                         ?.name
//                     }
//                   </td>

//                   <td className="p-5">
//                     {
//                       transfer.toWarehouseId
//                         ?.name
//                     }
//                   </td>

//                   <td className="p-5">
//                     {transfer.quantity}
//                   </td>

//                 </tr>

//               )
//             )}

//           </tbody>

//         </table>

//       </div>

//     </DashboardLayout>
//   );
// };

// export default Dashboard;





// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";

// // const DashboardLayout = ({ children }) => {
// //   return (
// //     <div className="bg-gray-100 min-h-screen">

// //       {/* FIXED SIDEBAR */}
// //       <div className="fixed top-0 left-0 w-[320px] h-screen z-50">
// //         <Sidebar />
// //       </div>

// //       {/* RIGHT CONTENT AREA */}
// //       <div className="ml-[320px] min-h-screen flex flex-col">

// //         {/* NAVBAR */}
// //         <div className="sticky top-0 z-40 bg-white shadow-sm">
// //           <Navbar />
// //         </div>

// //         {/* PAGE CONTENT */}
// //         <main className="flex-1 p-8 overflow-x-hidden">
// //           <div className="max-w-[1600px] mx-auto">
// //             {children}
// //           </div>
// //         </main>

// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;




import { useEffect, useState, useCallback } from "react";

import axios from "axios";

import Layout from "../layouts/Layout";

import {
  Warehouse,
  Package,
  ArrowLeftRight,
  ClipboardList,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {

  const [stats, setStats] = useState({
    warehouses: 0,
    products: 0,
    transfers: 0,
    inventoryLogs: 0,
  });

  const [warehouseStock, setWarehouseStock] =
    useState([]);

  const [inventoryData, setInventoryData] =
    useState([]);

  const [recentTransfers, setRecentTransfers] =
    useState([]);

  const token =
    localStorage.getItem("token");



  const fetchDashboardData =
    useCallback(async () => {

      try {

        const headers = {
          Authorization: `Bearer ${token}`,
        };



        const [
          warehouseRes,
          productRes,
          transferRes,
          inventoryRes,
        ] = await Promise.all([

          axios.get(
            "http://localhost:8000/api/warehouses",
            { headers }
          ),

          axios.get(
            "http://localhost:8000/api/products",
            { headers }
          ),

          axios.get(
            "http://localhost:8000/api/transfers",
            { headers }
          ),

          axios.get(
            "http://localhost:8000/api/inventory",
            { headers }
          ),
        ]);



        setStats({
          warehouses:
            warehouseRes.data.length,

          products:
            productRes.data.length,

          transfers:
            transferRes.data.length,

          inventoryLogs:
            inventoryRes.data.length,
        });



        const stockData =
          warehouseRes.data.map(
            (warehouse) => {

              const warehouseProducts =
                productRes.data.filter(
                  (product) =>
                    product.warehouseId?._id ===
                    warehouse._id
                );

              const totalStock =
                warehouseProducts.reduce(
                  (acc, product) =>
                    acc + product.quantity,
                  0
                );

              return {
                name: warehouse.name,
                stock: totalStock,
              };
            }
          );

        setWarehouseStock(stockData);



        const inCount =
          inventoryRes.data.filter(
            (item) => item.type === "IN"
          ).length;

        const outCount =
          inventoryRes.data.filter(
            (item) => item.type === "OUT"
          ).length;

        setInventoryData([
          {
            name: "Stock In",
            value: inCount,
          },
          {
            name: "Stock Out",
            value: outCount,
          },
        ]);



        setRecentTransfers(
          transferRes.data.slice(0, 5)
        );

      } catch (err) {

        console.log(err);

      }

    }, [token]);



  useEffect(() => {

    fetchDashboardData();

  }, [fetchDashboardData]);




  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Inventory system overview
          </p>

        </div>



        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* WAREHOUSES */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">

            <div className="flex items-center gap-4">

              <div className="bg-indigo-100 p-4 rounded-2xl">
                <Warehouse
                  size={30}
                  className="text-indigo-600"
                />
              </div>

              <div>

                <p className="text-gray-500">
                  Warehouses
                </p>

                <h2 className="text-4xl font-bold">
                  {stats.warehouses}
                </h2>

              </div>

            </div>

          </div>



          {/* PRODUCTS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">

            <div className="flex items-center gap-4">

              <div className="bg-green-100 p-4 rounded-2xl">
                <Package
                  size={30}
                  className="text-green-600"
                />
              </div>

              <div>

                <p className="text-gray-500">
                  Products
                </p>

                <h2 className="text-4xl font-bold">
                  {stats.products}
                </h2>

              </div>

            </div>

          </div>



          {/* TRANSFERS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">

            <div className="flex items-center gap-4">

              <div className="bg-yellow-100 p-4 rounded-2xl">
                <ArrowLeftRight
                  size={30}
                  className="text-yellow-600"
                />
              </div>

              <div>

                <p className="text-gray-500">
                  Transfers
                </p>

                <h2 className="text-4xl font-bold">
                  {stats.transfers}
                </h2>

              </div>

            </div>

          </div>



          {/* INVENTORY */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">

            <div className="flex items-center gap-4">

              <div className="bg-red-100 p-4 rounded-2xl">
                <ClipboardList
                  size={30}
                  className="text-red-600"
                />
              </div>

              <div>

                <p className="text-gray-500">
                  Inventory Logs
                </p>

                <h2 className="text-4xl font-bold">
                  {stats.inventoryLogs}
                </h2>

              </div>

            </div>

          </div>

        </div>



        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* BAR CHART */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-2xl font-bold mb-6">
              Warehouse Stock
            </h2>

            <div className="w-full h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={warehouseStock}>

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="stock"
                    fill="#4f46e5"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>



          {/* PIE CHART */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-2xl font-bold mb-6">
              Inventory Flow
            </h2>

            <div className="w-full h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={inventoryData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                  >

                    <Cell fill="#4f46e5" />

                    <Cell fill="#ef4444" />

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>



        {/* RECENT TRANSFERS */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Recent Transfers
            </h2>

          </div>



          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-5">
                    Product
                  </th>

                  <th className="text-left p-5">
                    From
                  </th>

                  <th className="text-left p-5">
                    To
                  </th>

                  <th className="text-left p-5">
                    Quantity
                  </th>

                </tr>

              </thead>



              <tbody>

                {recentTransfers.map(
                  (transfer) => (

                    <tr
                      key={transfer._id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="p-5">
                        {transfer.productId?.name}
                      </td>

                      <td className="p-5">
                        {transfer.fromWarehouseId?.name}
                      </td>

                      <td className="p-5">
                        {transfer.toWarehouseId?.name}
                      </td>

                      <td className="p-5 font-semibold">
                        {transfer.quantity}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </Layout>

  );
};

export default Dashboard;