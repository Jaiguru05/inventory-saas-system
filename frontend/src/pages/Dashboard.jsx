import {
  useEffect,
  useState,
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Warehouse,
  Package,
  ArrowRightLeft,
  ClipboardList,
} from "lucide-react";

const Dashboard = () => {

  const [stats, setStats] = useState({
    warehouses: 0,
    products: 0,
    transfers: 0,
    inventoryLogs: 0,
  });

  const token =
    localStorage.getItem("token");



  // FETCH DASHBOARD DATA
  const fetchDashboard =
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

      } catch (err) {

        console.log(err);

      }

    }, [token]);



  // LOAD DATA
  useEffect(() => {

    fetchDashboard();

  }, [fetchDashboard]);



  // BAR CHART DATA
  const barData = [
    {
      name: "Products",
      value: stats.products,
    },

    {
      name: "Transfers",
      value: stats.transfers,
    },

    {
      name: "Inventory",
      value: stats.inventoryLogs,
    },
  ];



  // PIE CHART DATA
  const pieData = [
    {
      name: "Warehouses",
      value: stats.warehouses,
    },

    {
      name: "Products",
      value: stats.products,
    },

    {
      name: "Transfers",
      value: stats.transfers,
    },

    {
      name: "Inventory",
      value: stats.inventoryLogs,
    },
  ];



  const COLORS = [
    "#4F46E5",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
  ];



  return (

    <DashboardLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1 text-base">
            Inventory system overview
          </p>

        </div>



        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* WAREHOUSES */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

            <div>

              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center">

                <Warehouse
                  size={34}
                  className="text-indigo-600"
                />

              </div>

            </div>

            <div className="text-right">

              <p className="text-gray-500 text-lg">
                Warehouses
              </p>

              <h2 className="text-4xl font-bold mt-1">
                {stats.warehouses}
              </h2>

            </div>

          </div>



          {/* PRODUCTS */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

            <div>

              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">

                <Package
                  size={34}
                  className="text-green-600"
                />

              </div>

            </div>

            <div className="text-right">

              <p className="text-gray-500 text-lg">
                Products
              </p>

              <h2 className="text-4xl font-bold text-green-600 mt-1">
                {stats.products}
              </h2>

            </div>

          </div>



          {/* TRANSFERS */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

            <div>

              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center">

                <ArrowRightLeft
                  size={34}
                  className="text-yellow-600"
                />

              </div>

            </div>

            <div className="text-right">

              <p className="text-gray-500 text-lg">
                Transfers
              </p>

              <h2 className="text-4xl font-bold text-yellow-500 mt-1">
                {stats.transfers}
              </h2>

            </div>

          </div>



          {/* INVENTORY */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

            <div>

              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">

                <ClipboardList
                  size={34}
                  className="text-red-500"
                />

              </div>

            </div>

            <div className="text-right">

              <p className="text-gray-500 text-lg">
                Inventory Logs
              </p>

              <h2 className="text-4xl font-bold text-red-500 mt-1">
                {stats.inventoryLogs}
              </h2>

            </div>

          </div>

        </div>



        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {/* BAR CHART */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <h2 className="text-2xl font-bold mb-4">
              Warehouse Stock
            </h2>

            <div className="w-full h-[320px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart data={barData}>

                  <XAxis
                    dataKey="name"
                    tick={{
                      fontSize: 14,
                    }}
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    radius={[10, 10, 0, 0]}
                  >

                    <Cell fill="#22C55E" />
                    <Cell fill="#F59E0B" />
                    <Cell fill="#6366F1" />

                  </Bar>

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>



          {/* PIE CHART */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <h2 className="text-2xl font-bold mb-4">
              Inventory Flow
            </h2>

            <div className="w-full h-[320px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={110}
                    label
                  >

                    {pieData.map(
                      (entry, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index %
                                COLORS.length
                            ]
                          }
                        />
                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>



        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <h2 className="text-2xl font-bold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border-b pb-3">

              <span className="text-base text-gray-600">
                Product Added
              </span>

              <span className="font-semibold text-base">
                iPhone 17
              </span>

            </div>

            <div className="flex justify-between items-center border-b pb-3">

              <span className="text-base text-gray-600">
                Warehouse Updated
              </span>

              <span className="font-semibold text-base">
                Bengaluru
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-base text-gray-600">
                Transfer Completed
              </span>

              <span className="font-semibold text-base">
                Chennai → Hyderabad
              </span>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
};

export default Dashboard;