"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  History,
  MessageSquareDiff,
  LogOut,
  User2Icon,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

export const sidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",
    route: "/admin/dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Orders",
    route: "/admin/orders",
    icon: <History className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Products",
    route: "/admin/products",
    icon: <Package className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Customers",
    route: "/admin/customers",
    icon: <User2Icon className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Customer Diaries",
    route: "/admin/customer-diaries",
    icon: <MessageSquareDiff className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Settings",
    route: "/admin/settings",
    icon: <Settings className="h-6 w-6" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky   w-16 md:w-20 lg:w-[250px] bg-white shadow-md flex flex-col h-screen">
      <div className="flex flex-col items-center lg:items-start p-4 lg:p-6">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-8 lg:h-12 lg:w-12 obejct-cover"
          />
          <span className="hidden lg:inline text-xl font-bold ml-2">Admin</span>
        </div>
        <div className="border-b-2 border-gray-200 w-full mt-2"></div>
      </div>
      <ul className="flex flex-col space-y-2 p-2">
        {sidebarRoutes.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className={`flex items-center lg:h-12 h-10   ${
              pathname === item.route
                ? "bg-primary text-white rounded-full"
                : "hover:bg-primary/10 text-black"
            }`}
          >
            <Link
              className="flex items-center justify-center md:justify-start space-x-4 w-full h-full pl-0 md:pl-6"
              href={item.route}
            >
              <span>{item.icon}</span>
              <span className="hidden lg:inline text-md font-medium">
                {item.title}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="p-2 mt-auto"
      >
        <button
          className="flex items-center w-full h-10 lg:h-12 text-black rounded-full justify-center md:justify-start space-x-4 pl-0 md:pl-6 hover:bg-red-600 transition-colors duration-200"
          onClick={() => alert("Logout functionality here")}
        >
          <LogOut className="h-6 w-6" />
          <span className="hidden lg:inline text-md font-medium">Logout</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
