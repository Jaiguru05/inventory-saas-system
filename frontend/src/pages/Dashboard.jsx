// // import {
// //   useEffect,
// //   useState,
// //   useCallback,
// // } from "react";

// // import axios from "axios";

// // import DashboardLayout from "../layouts/DashboardLayout";

// // import {
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   PieChart,
// //   Pie,
// //   Cell,
// // } from "recharts";

// // import {
// //   Warehouse,
// //   Package,
// //   ArrowRightLeft,
// //   ClipboardList,
// // } from "lucide-react";

// // const Dashboard = () => {

// //   const [stats, setStats] = useState({
// //     warehouses: 0,
// //     products: 0,
// //     transfers: 0,
// //     inventoryLogs: 0,
// //   });

// //   const token =
// //     localStorage.getItem("token");



// //   // FETCH DASHBOARD DATA
// //   const fetchDashboard =
// //     useCallback(async () => {

// //       try {

// //         const headers = {
// //           Authorization: `Bearer ${token}`,
// //         };

// //         const [
// //           warehouseRes,
// //           productRes,
// //           transferRes,
// //           inventoryRes,
// //         ] = await Promise.all([

// //           axios.get(
// //             "https://inventory-saas-system.onrender.com/api/warehouses",
// //             { headers }
// //           ),

// //           axios.get(
// //             "https://inventory-saas-system.onrender.com/api/products",
// //             { headers }
// //           ),

// //           axios.get(
// //             "https://inventory-saas-system.onrender.com/api/transfers",
// //             { headers }
// //           ),

// //           axios.get(
// //             "https://inventory-saas-system.onrender.com/api/inventory",
// //             { headers }
// //           ),
// //         ]);



// //         setStats({
// //           warehouses:
// //             warehouseRes.data.length,

// //           products:
// //             productRes.data.length,

// //           transfers:
// //             transferRes.data.length,

// //           inventoryLogs:
// //             inventoryRes.data.length,
// //         });

// //       } catch (err) {

// //         console.log(err);

// //       }

// //     }, [token]);



// //   // LOAD DATA
// //   useEffect(() => {

// //     fetchDashboard();

// //   }, [fetchDashboard]);



// //   // BAR CHART DATA
// //   const barData = [
// //     {
// //       name: "Products",
// //       value: stats.products,
// //     },

// //     {
// //       name: "Transfers",
// //       value: stats.transfers,
// //     },

// //     {
// //       name: "Inventory",
// //       value: stats.inventoryLogs,
// //     },
// //   ];



// //   // PIE CHART DATA
// //   const pieData = [
// //     {
// //       name: "Warehouses",
// //       value: stats.warehouses,
// //     },

// //     {
// //       name: "Products",
// //       value: stats.products,
// //     },

// //     {
// //       name: "Transfers",
// //       value: stats.transfers,
// //     },

// //     {
// //       name: "Inventory",
// //       value: stats.inventoryLogs,
// //     },
// //   ];



// //   const COLORS = [
// //     "#4F46E5",
// //     "#22C55E",
// //     "#F59E0B",
// //     "#EF4444",
// //   ];



// //   return (

// //     <DashboardLayout>

// //       <div className="space-y-6">

// //         {/* HEADER */}
// //         <div>

// //           <h1 className="text-4xl font-bold text-gray-900">
// //             Dashboard
// //           </h1>

// //           <p className="text-gray-500 mt-1 text-base">
// //             Inventory system overview
// //           </p>

// //         </div>



// //         {/* TOP CARDS */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

// //           {/* WAREHOUSES */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

// //             <div>

// //               <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center">

// //                 <Warehouse
// //                   size={34}
// //                   className="text-indigo-600"
// //                 />

// //               </div>

// //             </div>

// //             <div className="text-right">

// //               <p className="text-gray-500 text-lg">
// //                 Warehouses
// //               </p>

// //               <h2 className="text-4xl font-bold mt-1">
// //                 {stats.warehouses}
// //               </h2>

// //             </div>

// //           </div>



// //           {/* PRODUCTS */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

// //             <div>

// //               <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">

// //                 <Package
// //                   size={34}
// //                   className="text-green-600"
// //                 />

// //               </div>

// //             </div>

// //             <div className="text-right">

// //               <p className="text-gray-500 text-lg">
// //                 Products
// //               </p>

// //               <h2 className="text-4xl font-bold text-green-600 mt-1">
// //                 {stats.products}
// //               </h2>

// //             </div>

// //           </div>



// //           {/* TRANSFERS */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

// //             <div>

// //               <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center">

// //                 <ArrowRightLeft
// //                   size={34}
// //                   className="text-yellow-600"
// //                 />

// //               </div>

// //             </div>

// //             <div className="text-right">

// //               <p className="text-gray-500 text-lg">
// //                 Transfers
// //               </p>

// //               <h2 className="text-4xl font-bold text-yellow-500 mt-1">
// //                 {stats.transfers}
// //               </h2>

// //             </div>

// //           </div>



// //           {/* INVENTORY */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

// //             <div>

// //               <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">

// //                 <ClipboardList
// //                   size={34}
// //                   className="text-red-500"
// //                 />

// //               </div>

// //             </div>

// //             <div className="text-right">

// //               <p className="text-gray-500 text-lg">
// //                 Inventory Logs
// //               </p>

// //               <h2 className="text-4xl font-bold text-red-500 mt-1">
// //                 {stats.inventoryLogs}
// //               </h2>

// //             </div>

// //           </div>

// //         </div>



// //         {/* CHARTS */}
// //         <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

// //           {/* BAR CHART */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5">

// //             <h2 className="text-2xl font-bold mb-4">
// //               Warehouse Stock
// //             </h2>

// //             <div className="w-full h-[320px]">

// //               <ResponsiveContainer
// //                 width="100%"
// //                 height="100%"
// //               >

// //                 <BarChart data={barData}>

// //                   <XAxis
// //                     dataKey="name"
// //                     tick={{
// //                       fontSize: 14,
// //                     }}
// //                   />

// //                   <YAxis />

// //                   <Tooltip />

// //                   <Bar
// //                     dataKey="value"
// //                     radius={[10, 10, 0, 0]}
// //                   >

// //                     <Cell fill="#22C55E" />
// //                     <Cell fill="#F59E0B" />
// //                     <Cell fill="#6366F1" />

// //                   </Bar>

// //                 </BarChart>

// //               </ResponsiveContainer>

// //             </div>

// //           </div>



// //           {/* PIE CHART */}
// //           <div className="bg-white rounded-2xl shadow-sm p-5">

// //             <h2 className="text-2xl font-bold mb-4">
// //               Inventory Flow
// //             </h2>

// //             <div className="w-full h-[320px]">

// //               <ResponsiveContainer
// //                 width="100%"
// //                 height="100%"
// //               >

// //                 <PieChart>

// //                   <Pie
// //                     data={pieData}
// //                     dataKey="value"
// //                     outerRadius={110}
// //                     label
// //                   >

// //                     {pieData.map(
// //                       (entry, index) => (
// //                         <Cell
// //                           key={index}
// //                           fill={
// //                             COLORS[
// //                               index %
// //                                 COLORS.length
// //                             ]
// //                           }
// //                         />
// //                       )
// //                     )}

// //                   </Pie>

// //                   <Tooltip />

// //                 </PieChart>

// //               </ResponsiveContainer>

// //             </div>

// //           </div>

// //         </div>



// //         {/* RECENT ACTIVITY */}
// //         <div className="bg-white rounded-2xl shadow-sm p-5">

// //           <h2 className="text-2xl font-bold mb-5">
// //             Recent Activity
// //           </h2>

// //           <div className="space-y-4">

// //             <div className="flex justify-between items-center border-b pb-3">

// //               <span className="text-base text-gray-600">
// //                 Product Added
// //               </span>

// //               <span className="font-semibold text-base">
// //                 iPhone 17
// //               </span>

// //             </div>

// //             <div className="flex justify-between items-center border-b pb-3">

// //               <span className="text-base text-gray-600">
// //                 Warehouse Updated
// //               </span>

// //               <span className="font-semibold text-base">
// //                 Bengaluru
// //               </span>

// //             </div>

// //             <div className="flex justify-between items-center">

// //               <span className="text-base text-gray-600">
// //                 Transfer Completed
// //               </span>

// //               <span className="font-semibold text-base">
// //                 Chennai → Hyderabad
// //               </span>

// //             </div>

// //           </div>

// //         </div>

// //       </div>

// //     </DashboardLayout>

// //   );
// // };

// // export default Dashboard;




// import {
//   useEffect,
//   useState,
//   useCallback,
// } from "react";

// import axios from "axios";

// import DashboardLayout from "../layouts/DashboardLayout";

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

// import {
//   Warehouse,
//   Package,
//   ArrowRightLeft,
//   ClipboardList,
// } from "lucide-react";

// const Dashboard = () => {

//   // =========================
//   // STATES
//   // =========================

//   const [stats, setStats] =
//     useState({
//       warehouses: 0,
//       products: 0,
//       transfers: 0,
//       inventoryLogs: 0,
//     });

//   const [warehouses,
//     setWarehouses] =
//     useState([]);

//   const [products,
//     setProducts] =
//     useState([]);

//   const [
//     selectedWarehouse,
//     setSelectedWarehouse,
//   ] = useState("");



//   const token =
//     localStorage.getItem("token");



//   // =========================
//   // FETCH DATA
//   // =========================

//   const fetchDashboard =
//     useCallback(async () => {

//       try {

//         const headers = {
//           Authorization:
//             `Bearer ${token}`,
//         };

//         const [
//           warehouseRes,
//           productRes,
//           transferRes,
//           inventoryRes,
//         ] = await Promise.all([

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/warehouses",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/products",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/transfers",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/inventory",
//             { headers }
//           ),
//         ]);



//         setStats({
//           warehouses:
//             warehouseRes.data.length,

//           products:
//             productRes.data.length,

//           transfers:
//             transferRes.data.length,

//           inventoryLogs:
//             inventoryRes.data.length,
//         });



//         setWarehouses(
//           warehouseRes.data
//         );

//         setProducts(
//           productRes.data
//         );

//       } catch (err) {

//         console.log(err);

//       }

//     }, [token]);



//   useEffect(() => {

//     fetchDashboard();

//   }, [fetchDashboard]);



//   // =========================
//   // FILTER PRODUCTS
//   // =========================

//   const filteredProducts =
//     products.filter(
//       (product) =>
//         product.warehouse?.name ===
//         selectedWarehouse
//     );



//   const totalStock =
//     filteredProducts.reduce(
//       (acc, item) =>
//         acc + item.quantity,
//       0
//     );



//   // =========================
//   // CHART DATA
//   // =========================

//   const warehouseChartData = [
//     {
//       name: "Products",
//       value: stats.products,
//     },

//     {
//       name: "Transfers",
//       value: stats.transfers,
//     },

//     {
//       name: "Inventory",
//       value: stats.inventoryLogs,
//     },
//   ];



//   const inventoryFlowData = [
//     {
//       name: "Warehouses",
//       value: stats.warehouses,
//     },

//     {
//       name: "Products",
//       value: stats.products,
//     },

//     {
//       name: "Transfers",
//       value: stats.transfers,
//     },

//     {
//       name: "Inventory",
//       value: stats.inventoryLogs,
//     },
//   ];



//   const COLORS = [
//     "#4F46E5",
//     "#22C55E",
//     "#F59E0B",
//     "#EF4444",
//   ];



//   // =========================
//   // UI
//   // =========================

//   return (

//     <DashboardLayout>

//       <div className="
//         space-y-6
//         max-w-full
//       ">

//         {/* ========================= */}
//         {/* HEADER */}
//         {/* ========================= */}

//         <div>

//           <h1 className="
//             text-4xl
//             font-bold
//             text-gray-900
//           ">
//             Dashboard
//           </h1>

//           <p className="
//             text-gray-500
//             mt-1
//             text-base
//           ">
//             Inventory system overview
//           </p>

//         </div>



//         {/* ========================= */}
//         {/* SUMMARY CARDS */}
//         {/* ========================= */}

//         <div className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           xl:grid-cols-4
//           gap-5
//         ">

//           {/* WAREHOUSE */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-5
//             flex
//             items-center
//             justify-between
//           ">

//             <div className="
//               bg-indigo-100
//               w-16
//               h-16
//               rounded-2xl
//               flex
//               items-center
//               justify-center
//             ">

//               <Warehouse
//                 size={34}
//                 className="
//                   text-indigo-600
//                 "
//               />

//             </div>

//             <div className="text-right">

//               <p className="
//                 text-gray-500
//                 text-lg
//               ">
//                 Warehouses
//               </p>

//               <h2 className="
//                 text-4xl
//                 font-bold
//               ">
//                 {stats.warehouses}
//               </h2>

//             </div>

//           </div>



//           {/* PRODUCTS */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-5
//             flex
//             items-center
//             justify-between
//           ">

//             <div className="
//               bg-green-100
//               w-16
//               h-16
//               rounded-2xl
//               flex
//               items-center
//               justify-center
//             ">

//               <Package
//                 size={34}
//                 className="
//                   text-green-600
//                 "
//               />

//             </div>

//             <div className="text-right">

//               <p className="
//                 text-gray-500
//                 text-lg
//               ">
//                 Products
//               </p>

//               <h2 className="
//                 text-4xl
//                 font-bold
//                 text-green-600
//               ">
//                 {stats.products}
//               </h2>

//             </div>

//           </div>



//           {/* TRANSFERS */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-5
//             flex
//             items-center
//             justify-between
//           ">

//             <div className="
//               bg-yellow-100
//               w-16
//               h-16
//               rounded-2xl
//               flex
//               items-center
//               justify-center
//             ">

//               <ArrowRightLeft
//                 size={34}
//                 className="
//                   text-yellow-600
//                 "
//               />

//             </div>

//             <div className="text-right">

//               <p className="
//                 text-gray-500
//                 text-lg
//               ">
//                 Transfers
//               </p>

//               <h2 className="
//                 text-4xl
//                 font-bold
//                 text-yellow-500
//               ">
//                 {stats.transfers}
//               </h2>

//             </div>

//           </div>



//           {/* INVENTORY */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-5
//             flex
//             items-center
//             justify-between
//           ">

//             <div className="
//               bg-red-100
//               w-16
//               h-16
//               rounded-2xl
//               flex
//               items-center
//               justify-center
//             ">

//               <ClipboardList
//                 size={34}
//                 className="
//                   text-red-500
//                 "
//               />

//             </div>

//             <div className="text-right">

//               <p className="
//                 text-gray-500
//                 text-lg
//               ">
//                 Inventory Logs
//               </p>

//               <h2 className="
//                 text-4xl
//                 font-bold
//                 text-red-500
//               ">
//                 {stats.inventoryLogs}
//               </h2>

//             </div>

//           </div>

//         </div>



//         {/* ========================= */}
//         {/* WAREHOUSE ANALYTICS */}
//         {/* ========================= */}

//         <div className="
//           bg-white
//           rounded-2xl
//           shadow-sm
//           p-6
//         ">

//           <div className="
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-5
//           ">

//             <div>

//               <h2 className="
//                 text-2xl
//                 font-bold
//               ">
//                 Warehouse Analytics
//               </h2>

//               <p className="
//                 text-gray-500
//                 mt-1
//               ">
//                 View warehouse stock details
//               </p>

//             </div>



//             <select
//               value={
//                 selectedWarehouse
//               }

//               onChange={(e) =>
//                 setSelectedWarehouse(
//                   e.target.value
//                 )
//               }

//               className="
//                 border
//                 border-gray-300
//                 rounded-xl
//                 px-4
//                 py-3
//                 w-full
//                 lg:w-80
//                 outline-none
//               "
//             >

//               <option value="">
//                 Select Warehouse
//               </option>

//               {warehouses.map(
//                 (warehouse) => (

//                 <option
//                   key={
//                     warehouse._id
//                   }

//                   value={
//                     warehouse.name
//                   }
//                 >
//                   {warehouse.name}
//                 </option>

//               ))}

//             </select>

//           </div>



//           {/* ANALYTICS CARDS */}
//           {selectedWarehouse && (

//             <div className="
//               grid
//               md:grid-cols-3
//               gap-5
//               mt-6
//             ">

//               <div className="
//                 bg-gray-50
//                 rounded-2xl
//                 p-5
//               ">

//                 <p className="
//                   text-gray-500
//                 ">
//                   Warehouse
//                 </p>

//                 <h3 className="
//                   text-2xl
//                   font-bold
//                   mt-2
//                 ">
//                   {selectedWarehouse}
//                 </h3>

//               </div>



//               <div className="
//                 bg-gray-50
//                 rounded-2xl
//                 p-5
//               ">

//                 <p className="
//                   text-gray-500
//                 ">
//                   Products
//                 </p>

//                 <h3 className="
//                   text-2xl
//                   font-bold
//                   text-green-600
//                   mt-2
//                 ">
//                   {
//                     filteredProducts.length
//                   }
//                 </h3>

//               </div>



//               <div className="
//                 bg-gray-50
//                 rounded-2xl
//                 p-5
//               ">

//                 <p className="
//                   text-gray-500
//                 ">
//                   Total Stock
//                 </p>

//                 <h3 className="
//                   text-2xl
//                   font-bold
//                   text-indigo-600
//                   mt-2
//                 ">
//                   {totalStock}
//                 </h3>

//               </div>

//             </div>

//           )}

//         </div>



//         {/* ========================= */}
//         {/* CHARTS */}
//         {/* ========================= */}

//         <div className="
//           grid
//           grid-cols-1
//           xl:grid-cols-2
//           gap-5
//         ">

//           {/* BAR CHART */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-6
//           ">

//             <h2 className="
//               text-3xl
//               font-bold
//               mb-5
//             ">
//               Warehouse Stock
//             </h2>

//             <div className="
//               w-full
//               h-[400px]
//             ">

//               <ResponsiveContainer
//                 width="100%"
//                 height="100%"
//               >

//                 <BarChart
//                   data={
//                     warehouseChartData
//                   }
//                 >

//                   <XAxis
//                     dataKey="name"
//                     tick={{
//                       fontSize: 16,
//                     }}
//                   />

//                   <YAxis />

//                   <Tooltip />

//                   <Bar
//                     dataKey="value"
//                     radius={[
//                       14,
//                       14,
//                       0,
//                       0,
//                     ]}
//                   >

//                     <Cell fill="#22C55E" />

//                     <Cell fill="#F59E0B" />

//                     <Cell fill="#6366F1" />

//                   </Bar>

//                 </BarChart>

//               </ResponsiveContainer>

//             </div>

//           </div>



//           {/* PIE CHART */}
//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-6
//           ">

//             <h2 className="
//               text-3xl
//               font-bold
//               mb-5
//             ">
//               Inventory Flow
//             </h2>

//             <div className="
//               w-full
//               h-[400px]
//             ">

//               <ResponsiveContainer
//                 width="100%"
//                 height="100%"
//               >

//                 <PieChart>

//                   <Pie
//                     data={
//                       inventoryFlowData
//                     }

//                     dataKey="value"

//                     outerRadius={140}

//                     label
//                   >

//                     {inventoryFlowData.map(
//                       (
//                         entry,
//                         index
//                       ) => (

//                         <Cell
//                           key={index}
//                           fill={
//                             COLORS[
//                               index %
//                               COLORS.length
//                             ]
//                           }
//                         />

//                       )
//                     )}

//                   </Pie>

//                   <Tooltip />

//                 </PieChart>

//               </ResponsiveContainer>

//             </div>

//           </div>

//         </div>



//         {/* ========================= */}
//         {/* PRODUCTS */}
//         {/* ========================= */}

//         {selectedWarehouse && (

//           <div className="
//             bg-white
//             rounded-2xl
//             shadow-sm
//             p-6
//           ">

//             <h2 className="
//               text-2xl
//               font-bold
//               mb-5
//             ">
//               Products in
//               {" "}
//               {selectedWarehouse}
//             </h2>

//             <div className="
//               overflow-x-auto
//             ">

//               <table className="
//                 w-full
//               ">

//                 <thead>

//                   <tr className="
//                     border-b
//                   ">

//                     <th className="
//                       text-left
//                       py-3
//                     ">
//                       Product
//                     </th>

//                     <th className="
//                       text-left
//                       py-3
//                     ">
//                       SKU
//                     </th>

//                     <th className="
//                       text-left
//                       py-3
//                     ">
//                       Quantity
//                     </th>

//                     <th className="
//                       text-left
//                       py-3
//                     ">
//                       Status
//                     </th>

//                   </tr>

//                 </thead>



//                 <tbody>

//                   {filteredProducts.map(
//                     (product) => (

//                     <tr
//                       key={product._id}
//                       className="
//                         border-b
//                       "
//                     >

//                       <td className="
//                         py-4
//                       ">
//                         {product.name}
//                       </td>

//                       <td>
//                         {product.sku}
//                       </td>

//                       <td>
//                         {product.quantity}
//                       </td>

//                       <td>

//                         {product.quantity <
//                         10 ? (

//                           <span className="
//                             text-red-500
//                             font-semibold
//                           ">
//                             Low Stock
//                           </span>

//                         ) : (

//                           <span className="
//                             text-green-600
//                             font-semibold
//                           ">
//                             In Stock
//                           </span>

//                         )}

//                       </td>

//                     </tr>

//                   ))}

//                 </tbody>

//               </table>

//             </div>

//           </div>

//         )}



//         {/* ========================= */}
//         {/* RECENT ACTIVITY */}
//         {/* ========================= */}

//         <div className="
//           bg-white
//           rounded-2xl
//           shadow-sm
//           p-6
//         ">

//           <h2 className="
//             text-2xl
//             font-bold
//             mb-5
//           ">
//             Recent Activity
//           </h2>

//           <div className="
//             space-y-4
//           ">

//             <div className="
//               flex
//               justify-between
//               border-b
//               pb-3
//             ">

//               <span>
//                 Product Added
//               </span>

//               <span className="
//                 font-semibold
//               ">
//                 iPhone 17
//               </span>

//             </div>



//             <div className="
//               flex
//               justify-between
//               border-b
//               pb-3
//             ">

//               <span>
//                 Transfer Completed
//               </span>

//               <span className="
//                 font-semibold
//               ">
//                 Chennai →
//                 Bengaluru
//               </span>

//             </div>



//             <div className="
//               flex
//               justify-between
//             ">

//               <span>
//                 Inventory Updated
//               </span>

//               <span className="
//                 font-semibold
//               ">
//                 MacBook Pro
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//     </DashboardLayout>

//   );
// };

// export default Dashboard;




// import {
//   useEffect,
//   useState,
//   useMemo,
// } from "react";

// import axios from "axios";

// import DashboardLayout from "../layouts/DashboardLayout";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   LineChart,
//   Line,
// } from "recharts";

// const Dashboard = () => {

//   const [stats, setStats] =
//     useState({
//       warehouses: 0,
//       products: 0,
//       transfers: 0,
//       inventoryLogs: 0,
//     });

//   const [warehouses, setWarehouses] =
//     useState([]);

//   const [products, setProducts] =
//     useState([]);

//   const [transfers, setTransfers] =
//     useState([]);

//   const [inventoryLogs, setInventoryLogs] =
//     useState([]);

//   const [
//     selectedWarehouse,
//     setSelectedWarehouse,
//   ] = useState("");

//   const token =
//     localStorage.getItem("token");

//   /* ================================= */
//   /* FETCH DASHBOARD */
//   /* ================================= */

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard =
//     async () => {

//       try {

//         const headers = {
//           Authorization:
//             `Bearer ${token}`,
//         };

//         const [
//           warehouseRes,
//           productRes,
//           transferRes,
//           inventoryRes,
//         ] = await Promise.all([

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/warehouses",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/products",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/transfers",
//             { headers }
//           ),

//           axios.get(
//             "https://inventory-saas-system.onrender.com/api/inventory",
//             { headers }
//           ),

//         ]);

//         setWarehouses(
//           warehouseRes.data || []
//         );

//         setProducts(
//           productRes.data || []
//         );

//         setTransfers(
//           transferRes.data || []
//         );

//         setInventoryLogs(
//           inventoryRes.data || []
//         );

//         setStats({
//           warehouses:
//             warehouseRes.data.length,

//           products:
//             productRes.data.length,

//           transfers:
//             transferRes.data.length,

//           inventoryLogs:
//             inventoryRes.data.length,
//         });

//         if (
//           warehouseRes.data.length > 0
//         ) {
//           setSelectedWarehouse(
//             warehouseRes.data[0]._id
//           );
//         }

//       } catch (err) {

//         console.log(err);

//       }
//     };

//   /* ================================= */
//   /* FILTER PRODUCTS */
//   /* ================================= */

//   const filteredProducts =
//     useMemo(() => {

//       return products.filter(
//         (product) =>
//           product.warehouseId?._id ===
//           selectedWarehouse
//       );

//     }, [
//       products,
//       selectedWarehouse,
//     ]);

//   /* ================================= */
//   /* FILTER TRANSFERS */
//   /* ================================= */

//   const filteredTransfers =
//     useMemo(() => {

//       return transfers.filter(
//         (transfer) =>

//           transfer.fromWarehouse?._id ===
//             selectedWarehouse ||

//           transfer.toWarehouse?._id ===
//             selectedWarehouse
//       );

//     }, [
//       transfers,
//       selectedWarehouse,
//     ]);

//   /* ================================= */
//   /* FILTER LOGS */
//   /* ================================= */

//   const filteredLogs =
//     useMemo(() => {

//       return inventoryLogs.filter(
//         (log) =>
//           log.warehouseId?._id ===
//           selectedWarehouse
//       );

//     }, [
//       inventoryLogs,
//       selectedWarehouse,
//     ]);

//   /* ================================= */
//   /* ANALYTICS */
//   /* ================================= */

//   const totalProducts =
//     filteredProducts.length;

//   const totalStock =
//     filteredProducts.reduce(
//       (acc, item) =>
//         acc + (item.quantity || 0),
//       0
//     );

//   const stockIn =
//     filteredLogs
//       .filter(
//         (log) =>
//           log.type === "IN"
//       )
//       .reduce(
//         (acc, log) =>
//           acc + (log.quantity || 0),
//         0
//       );

//   const stockOut =
//     filteredLogs
//       .filter(
//         (log) =>
//           log.type === "OUT"
//       )
//       .reduce(
//         (acc, log) =>
//           acc + (log.quantity || 0),
//         0
//       );

//   const analyticsData = [

//     {
//       name: "Products",
//       value: totalProducts,
//     },

//     {
//       name: "Stock In",
//       value: stockIn,
//     },

//     {
//       name: "Stock Out",
//       value: stockOut,
//     },

//     {
//       name: "Transfers",
//       value:
//         filteredTransfers.length,
//     },

//   ];

//   const stockTrendData =
//     filteredProducts.map(
//       (product) => ({
//         name: product.name,
//         stock:
//           product.quantity || 0,
//       })
//     );

//   return (

//     <DashboardLayout>

//       <div className="space-y-6">

//         {/* HEADER */}

//         <div>

//           <h1 className="
//             text-4xl
//             font-bold
//             text-gray-900
//           ">
//             Dashboard
//           </h1>

//           <p className="
//             text-gray-500
//             mt-1
//             text-lg
//           ">
//             Inventory system overview
//           </p>

//         </div>

//         {/* SUMMARY */}

//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           xl:grid-cols-4
//           gap-5
//         ">

//           <SummaryCard
//             title="Warehouses"
//             value={stats.warehouses}
//             icon="🏢"
//             color="bg-indigo-100"
//           />

//           <SummaryCard
//             title="Products"
//             value={stats.products}
//             icon="📦"
//             color="bg-green-100"
//           />

//           <SummaryCard
//             title="Transfers"
//             value={stats.transfers}
//             icon="🔄"
//             color="bg-yellow-100"
//           />

//           <SummaryCard
//             title="Inventory Logs"
//             value={stats.inventoryLogs}
//             icon="📋"
//             color="bg-red-100"
//           />

//         </div>

//         {/* WAREHOUSE ANALYTICS */}

//         <div className="
//           bg-white
//           rounded-3xl
//           p-7
//           shadow-sm
//           border
//           border-gray-100
//         ">

//           <div className="
//             flex
//             flex-col
//             xl:flex-row
//             justify-between
//             xl:items-center
//             gap-6
//             mb-8
//           ">

//             <div>

//               <h2 className="
//                 text-4xl
//                 font-bold
//               ">
//                 Warehouse Analytics
//               </h2>

//               <p className="
//                 text-gray-500
//                 mt-2
//                 text-lg
//               ">
//                 Real-time warehouse insights
//               </p>

//             </div>

//             <select

//               value={
//                 selectedWarehouse
//               }

//               onChange={(e) =>
//                 setSelectedWarehouse(
//                   e.target.value
//                 )
//               }

//               className="
//                 border-2
//                 border-gray-200
//                 rounded-2xl
//                 px-5
//                 py-4
//                 w-full
//                 xl:w-96
//                 text-lg
//                 outline-none
//                 focus:border-indigo-500
//               "
//             >

//               {warehouses.map(
//                 (warehouse) => (

//                 <option
//                   key={
//                     warehouse._id
//                   }

//                   value={
//                     warehouse._id
//                   }
//                 >
//                   {warehouse.name}
//                 </option>

//               ))}

//             </select>

//           </div>

//           {/* ANALYTIC CARDS */}

//           <div className="
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-4
//             gap-5
//             mb-8
//           ">

//             <AnalyticsCard
//               title="Products"
//               value={totalProducts}
//               color="text-green-600"
//               bg="bg-green-50"
//             />

//             <AnalyticsCard
//               title="Total Stock"
//               value={totalStock}
//               color="text-indigo-600"
//               bg="bg-indigo-50"
//             />

//             <AnalyticsCard
//               title="Stock IN"
//               value={stockIn}
//               color="text-blue-600"
//               bg="bg-blue-50"
//             />

//             <AnalyticsCard
//               title="Stock OUT"
//               value={stockOut}
//               color="text-red-600"
//               bg="bg-red-50"
//             />

//           </div>

//           {/* CHARTS */}

//           <div className="
//             grid
//             grid-cols-1
//             xl:grid-cols-2
//             gap-6
//           ">

//             {/* BAR */}

//             <ChartCard
//               title="Warehouse Operations"
//             >

//               <ResponsiveContainer
//                 width="100%"
//                 height={320}
//               >

//                 <BarChart
//                   data={analyticsData}
//                 >

//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                   />

//                   <XAxis
//                     dataKey="name"
//                   />

//                   <YAxis />

//                   <Tooltip />

//                   <Bar
//                     dataKey="value"
//                     radius={[
//                       10,
//                       10,
//                       0,
//                       0,
//                     ]}
//                   >

//                     <Cell fill="#22C55E" />
//                     <Cell fill="#4F46E5" />
//                     <Cell fill="#3B82F6" />
//                     <Cell fill="#EF4444" />

//                   </Bar>

//                 </BarChart>

//               </ResponsiveContainer>

//             </ChartCard>

//             {/* PIE */}

//             <ChartCard
//               title="Inventory Flow"
//             >

//               <ResponsiveContainer
//                 width="100%"
//                 height={320}
//               >

//                 <PieChart>

//                   <Pie
//                     data={analyticsData}
//                     dataKey="value"
//                     outerRadius={120}
//                     label
//                   >

//                     <Cell fill="#22C55E" />
//                     <Cell fill="#4F46E5" />
//                     <Cell fill="#3B82F6" />
//                     <Cell fill="#EF4444" />

//                   </Pie>

//                   <Tooltip />

//                   <Legend />

//                 </PieChart>

//               </ResponsiveContainer>

//             </ChartCard>

//           </div>

//           {/* PRODUCT TREND */}

//           <div className="
//             bg-gray-50
//             rounded-3xl
//             p-6
//             mt-6
//           ">

//             <h3 className="
//               text-3xl
//               font-bold
//               mb-5
//             ">
//               Product Stock Trend
//             </h3>

//             <ResponsiveContainer
//               width="100%"
//               height={320}
//             >

//               <LineChart
//                 data={stockTrendData}
//               >

//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                 />

//                 <XAxis
//                   dataKey="name"
//                 />

//                 <YAxis />

//                 <Tooltip />

//                 <Line
//                   type="monotone"
//                   dataKey="stock"
//                   stroke="#4F46E5"
//                   strokeWidth={4}
//                 />

//               </LineChart>

//             </ResponsiveContainer>

//           </div>

//           {/* RECENT ACTIVITY */}

//           <div className="
//             bg-gray-50
//             rounded-3xl
//             p-6
//             mt-6
//           ">

//             <h3 className="
//               text-3xl
//               font-bold
//               mb-5
//             ">
//               Recent Activity
//             </h3>

//             <div className="
//               space-y-4
//             ">

//               {filteredLogs
//                 .slice(0, 5)
//                 .map((log, index) => (

//                 <div
//                   key={index}

//                   className="
//                     bg-white
//                     rounded-2xl
//                     p-5
//                     flex
//                     justify-between
//                     items-center
//                   "
//                 >

//                   <div>

//                     <h4 className="
//                       font-semibold
//                       text-lg
//                     ">
//                       {
//                         log.productName ||
//                         log.productId?.name
//                       }
//                     </h4>

//                     <p className="
//                       text-gray-500
//                     ">
//                       {log.type}
//                     </p>

//                   </div>

//                   <div className="
//                     font-bold
//                     text-xl
//                   ">
//                     {log.quantity}
//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </DashboardLayout>
//   );
// };

// /* ================================= */
// /* SUMMARY CARD */
// /* ================================= */

// const SummaryCard = ({
//   title,
//   value,
//   icon,
//   color,
// }) => (

//   <div className="
//     bg-white
//     rounded-3xl
//     p-6
//     shadow-sm
//     border
//     border-gray-100
//     flex
//     items-center
//     justify-between
//   ">

//     <div>

//       <p className="
//         text-gray-500
//         text-lg
//       ">
//         {title}
//       </p>

//       <h2 className="
//         text-5xl
//         font-bold
//         mt-2
//       ">
//         {value}
//       </h2>

//     </div>

//     <div className={`
//       w-20
//       h-20
//       rounded-3xl
//       ${color}
//       flex
//       items-center
//       justify-center
//       text-4xl
//     `}>
//       {icon}
//     </div>

//   </div>
// );

// /* ================================= */
// /* ANALYTICS CARD */
// /* ================================= */

// const AnalyticsCard = ({
//   title,
//   value,
//   color,
//   bg,
// }) => (

//   <div className={`
//     ${bg}
//     rounded-3xl
//     p-6
//   `}>

//     <p className="
//       text-gray-600
//       text-lg
//     ">
//       {title}
//     </p>

//     <h3 className={`
//       text-5xl
//       font-bold
//       mt-3
//       ${color}
//     `}>
//       {value}
//     </h3>

//   </div>
// );

// /* ================================= */
// /* CHART CARD */
// /* ================================= */

// const ChartCard = ({
//   title,
//   children,
// }) => (

//   <div className="
//     bg-gray-50
//     rounded-3xl
//     p-6
//   ">

//     <h3 className="
//       text-3xl
//       font-bold
//       mb-5
//     ">
//       {title}
//     </h3>

//     {children}

//   </div>
// );

// export default Dashboard;




import {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {

  const [stats, setStats] = useState({
    warehouses: 0,
    products: 0,
    transfers: 0,
    inventoryLogs: 0,
  });

  const [warehouses, setWarehouses] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [transfers, setTransfers] =
    useState([]);

  const [inventoryLogs, setInventoryLogs] =
    useState([]);

  const [
    selectedWarehouse,
    setSelectedWarehouse,
  ] = useState("");

  const token =
    localStorage.getItem("token");

  /* ================================= */
  /* FETCH DASHBOARD */
  /* ================================= */

  const fetchDashboard =
    useCallback(async () => {

      try {

        const headers = {
          Authorization:
            `Bearer ${token}`,
        };

        const [
          warehouseRes,
          productRes,
          transferRes,
          inventoryRes,
        ] = await Promise.all([

          axios.get(
            "https://inventory-saas-system.onrender.com/api/warehouses",
            { headers }
          ),

          axios.get(
            "https://inventory-saas-system.onrender.com/api/products",
            { headers }
          ),

          axios.get(
            "https://inventory-saas-system.onrender.com/api/transfers",
            { headers }
          ),

          axios.get(
            "https://inventory-saas-system.onrender.com/api/inventory",
            { headers }
          ),

        ]);

        setWarehouses(
          warehouseRes.data || []
        );

        setProducts(
          productRes.data || []
        );

        setTransfers(
          transferRes.data || []
        );

        setInventoryLogs(
          inventoryRes.data || []
        );

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

        if (
          warehouseRes.data.length > 0
        ) {

          setSelectedWarehouse(
            warehouseRes.data[0]._id
          );

        }

      } catch (err) {

        console.log(err);

      }

    }, [token]);

  useEffect(() => {

    fetchDashboard();

  }, [fetchDashboard]);

  /* ================================= */
  /* FILTER PRODUCTS */
  /* ================================= */

  const filteredProducts =
    useMemo(() => {

      return products.filter(
        (product) =>
          product.warehouseId?._id ===
          selectedWarehouse
      );

    }, [
      products,
      selectedWarehouse,
    ]);

  /* ================================= */
  /* FILTER TRANSFERS */
  /* ================================= */

  const filteredTransfers =
    useMemo(() => {

      return transfers.filter(
        (transfer) =>

          transfer.fromWarehouse?._id ===
            selectedWarehouse ||

          transfer.toWarehouse?._id ===
            selectedWarehouse
      );

    }, [
      transfers,
      selectedWarehouse,
    ]);

  /* ================================= */
  /* FILTER LOGS */
  /* ================================= */

  const filteredLogs =
    useMemo(() => {

      return inventoryLogs.filter(
        (log) => {

          if (
            typeof log.warehouseId ===
            "object"
          ) {

            return (
              log.warehouseId?._id ===
              selectedWarehouse
            );
          }

          return (
            log.warehouseId ===
            selectedWarehouse
          );
        }
      );

    }, [
      inventoryLogs,
      selectedWarehouse,
    ]);

  /* ================================= */
  /* ANALYTICS */
  /* ================================= */

  const totalProducts =
    filteredProducts.length;

  const totalStock =
    filteredProducts.reduce(
      (acc, item) =>
        acc + (item.quantity || 0),
      0
    );

  const stockIn =
    filteredLogs
      .filter(
        (log) =>
          log.type === "IN"
      )
      .reduce(
        (acc, log) =>
          acc + (log.quantity || 0),
        0
      );

  const stockOut =
    filteredLogs
      .filter(
        (log) =>
          log.type === "OUT"
      )
      .reduce(
        (acc, log) =>
          acc + (log.quantity || 0),
        0
      );

  const analyticsData = [

    {
      name: "Products",
      value: totalProducts,
    },

    {
      name: "Stock In",
      value: stockIn,
    },

    {
      name: "Stock Out",
      value: stockOut,
    },

    {
      name: "Transfers",
      value:
        filteredTransfers.length,
    },

  ];

  const stockTrendData =
    filteredProducts.map(
      (product) => ({
        name: product.name,
        stock:
          product.quantity || 0,
      })
    );

  const COLORS = [
    "#22C55E",
    "#4F46E5",
    "#3B82F6",
    "#EF4444",
  ];

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* HEADER */}

        <div>

          <h1 className="
            text-5xl
            font-black
            text-gray-900
          ">
            Dashboard
          </h1>

          <p className="
            text-gray-500
            text-xl
            mt-2
          ">
            Inventory system overview
          </p>

        </div>

        {/* SUMMARY */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        ">

          <SummaryCard
            title="Warehouses"
            value={stats.warehouses}
            icon="🏢"
            color="bg-indigo-100"
          />

          <SummaryCard
            title="Products"
            value={stats.products}
            icon="📦"
            color="bg-green-100"
          />

          <SummaryCard
            title="Transfers"
            value={stats.transfers}
            icon="🔄"
            color="bg-yellow-100"
          />

          <SummaryCard
            title="Inventory Logs"
            value={stats.inventoryLogs}
            icon="📋"
            color="bg-red-100"
          />

        </div>

        {/* ANALYTICS */}

        <div className="
          bg-white
          rounded-[35px]
          p-8
          shadow-sm
          border
          border-gray-100
        ">

          <div className="
            flex
            flex-col
            xl:flex-row
            justify-between
            gap-6
            mb-10
          ">

            <div>

              <h2 className="
                text-5xl
                font-black
              ">
                Warehouse Analytics
              </h2>

              <p className="
                text-gray-500
                text-xl
                mt-2
              ">
                Real-time warehouse insights
              </p>

            </div>

            <select

              value={selectedWarehouse}

              onChange={(e) =>
                setSelectedWarehouse(
                  e.target.value
                )
              }

              className="
                w-full
                xl:w-[400px]
                border-2
                border-gray-200
                rounded-3xl
                px-6
                py-5
                text-xl
                outline-none
                focus:border-indigo-500
              "
            >

              {warehouses.map(
                (warehouse) => (

                <option
                  key={warehouse._id}
                  value={warehouse._id}
                >
                  {warehouse.name}
                </option>

              ))}

            </select>

          </div>

          {/* ANALYTICS CARDS */}

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
            mb-8
          ">

            <AnalyticsCard
              title="Products"
              value={totalProducts}
              color="text-green-600"
              bg="bg-green-50"
            />

            <AnalyticsCard
              title="Total Stock"
              value={totalStock}
              color="text-indigo-600"
              bg="bg-indigo-50"
            />

            <AnalyticsCard
              title="Stock IN"
              value={stockIn}
              color="text-blue-600"
              bg="bg-blue-50"
            />

            <AnalyticsCard
              title="Stock OUT"
              value={stockOut}
              color="text-red-600"
              bg="bg-red-50"
            />

          </div>

          {/* CHARTS */}

          <div className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          ">

            {/* BAR CHART */}

            <ChartCard
              title="Warehouse Operations"
            >

              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <BarChart
                  data={analyticsData}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    radius={[10, 10, 0, 0]}
                  >

                    {analyticsData.map(
                      (entry, index) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[index %
                          COLORS.length]
                        }
                      />

                    ))}

                  </Bar>

                </BarChart>

              </ResponsiveContainer>

            </ChartCard>

            {/* PIE CHART */}

            <ChartCard
              title="Inventory Flow"
            >

              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <PieChart>

                  <Pie
                    data={analyticsData}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >

                    {analyticsData.map(
                      (entry, index) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[index %
                          COLORS.length]
                        }
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </ChartCard>

          </div>

          {/* PRODUCT TREND */}

          <div className="
            bg-gray-50
            rounded-3xl
            p-6
            mt-6
          ">

            <h3 className="
              text-3xl
              font-bold
              mb-5
            ">
              Product Stock Trend
            </h3>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <LineChart
                data={stockTrendData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#4F46E5"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* RECENT ACTIVITY */}

          <div className="
            bg-gray-50
            rounded-3xl
            p-6
            mt-6
          ">

            <h3 className="
              text-3xl
              font-bold
              mb-5
            ">
              Recent Activity
            </h3>

            <div className="
              space-y-4
            ">

              {filteredLogs
                .slice(0, 5)
                .map((log, index) => (

                <div
                  key={index}

                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    flex
                    justify-between
                    items-center
                  "
                >

                  <div>

                    <h4 className="
                      font-semibold
                      text-lg
                    ">
                      {
                        log.productName ||
                        log.productId?.name
                      }
                    </h4>

                    <p className="
                      text-gray-500
                    ">
                      {log.type}
                    </p>

                  </div>

                  <div className="
                    font-bold
                    text-xl
                  ">
                    {log.quantity}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

/* SUMMARY CARD */

const SummaryCard = ({
  title,
  value,
  icon,
  color,
}) => (

  <div className="
    bg-white
    rounded-3xl
    p-6
    shadow-sm
    border
    border-gray-100
    flex
    items-center
    justify-between
  ">

    <div>

      <p className="
        text-gray-500
        text-lg
      ">
        {title}
      </p>

      <h2 className="
        text-5xl
        font-bold
        mt-2
      ">
        {value}
      </h2>

    </div>

    <div className={`
      w-20
      h-20
      rounded-3xl
      ${color}
      flex
      items-center
      justify-center
      text-4xl
    `}>
      {icon}
    </div>

  </div>
);

/* ANALYTICS CARD */

const AnalyticsCard = ({
  title,
  value,
  color,
  bg,
}) => (

  <div className={`
    ${bg}
    rounded-3xl
    p-6
  `}>

    <p className="
      text-gray-600
      text-lg
    ">
      {title}
    </p>

    <h3 className={`
      text-5xl
      font-bold
      mt-3
      ${color}
    `}>
      {value}
    </h3>

  </div>
);

/* CHART CARD */

const ChartCard = ({
  title,
  children,
}) => (

  <div className="
    bg-gray-50
    rounded-3xl
    p-6
  ">

    <h3 className="
      text-3xl
      font-bold
      mb-5
    ">
      {title}
    </h3>

    {children}

  </div>
);

export default Dashboard;