"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Heart,
  LayoutDashboard,
  Settings,
  History,
  MessageSquareDiff,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

export const sidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",
    route: "/user-dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Order History",
    route: "/user-dashboard/order-history",
    icon: <History className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Wishlist",
    route: "/user-dashboard/wishlist",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Customer Diaries",
    route: "/user-dashboard/customer-diaries",
    icon: <MessageSquareDiff className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Settings",
    route: "/user-dashboard/settings",
    icon: <Settings className="h-6 w-6" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky fixed top-20 w-16 md:w-20 lg:w-[280px] bg-white shadow-md flex flex-col h-screen">
      <ul className="flex flex-col space-y-2 p-2">
        {sidebarRoutes.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className={`flex items-center lg:h-12 h-10 transition-colors duration-200 ${
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
