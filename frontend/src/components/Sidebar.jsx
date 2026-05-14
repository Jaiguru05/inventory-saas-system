import {
  FaWarehouse,
  FaBox,
  FaClipboardList,
  FaExchangeAlt,
  FaUsers,
  FaCog,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Warehouses",
      path: "/warehouses",
      icon: <FaWarehouse />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FaBox />,
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: <FaClipboardList />,
    },
    {
      name: "Transfers",
      path: "/transfers",
      icon: <FaExchangeAlt />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <FaUsers />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside
      className="
        fixed
        top-0
        left-0
        w-64
        h-screen
        bg-black
        text-white
        z-50
      "
    >

      {/* LOGO */}
      <div className="p-6 border-b border-gray-800">

        <h1 className="text-4xl font-bold leading-tight">
          Inventory
          <br />
          SaaS
        </h1>

      </div>

      {/* MENU */}
      <div className="p-4 space-y-3">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              text-lg
              transition
              ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-800 text-gray-200"
              }
            `}
          >

            <span className="text-xl">
              {item.icon}
            </span>

            {item.name}

          </Link>

        ))}

      </div>

    </aside>
  );
}