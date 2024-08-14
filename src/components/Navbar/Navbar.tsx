"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const navData = [
  { _id: 101, title: "Home", href: "/" },
  {
    _id: 102,
    title: "Categories",
    href: "/categories",
    submenu: [
      { _id: 201, title: "Sarees", href: "/categories/sarees" },
      { _id: 202, title: "Lehengas", href: "/categories/lehengas" },
      { _id: 203, title: "Kurtas", href: "/categories/kurtas" },
      { _id: 205, title: "Family Sets", href: "/categories/family-set" },
      { _id: 204, title: "Others", href: "/categories/others" },
    ],
  },
  { _id: 103, title: "About Us", href: "/about-us" },
  { _id: 104, title: "Customer Diaries", href: "/customers-diaries" },
  { _id: 105, title: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleTouchStart = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <div className="flex flex-row  py-2">
      {navData.map(({ _id, title, href, submenu }) => (
        <div
          key={_id}
          className="relative inline-block"
          onMouseEnter={() => handleMouseEnter(_id)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleTouchStart(_id)}
        >
          <Link
            href={href}
            className="flex rounded-lg px-4 py-2 items-center text-base text-gray-700 transition-colors hover:text-white hover:bg-primary"
          >
            <AnimatePresence>
              {hoveredIndex === _id && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-primary hover:text-white backdrop-blur-sm z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10 font-medium">{title}</span>
            {submenu && (
              <span className="ml-1 relative z-10">
                {hoveredIndex === _id ? (
                  <ChevronUp size={18} className="text-white" />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
            )}
          </Link>
          {submenu && (
            <AnimatePresence>
              {hoveredIndex === _id && (
                <motion.div
                  className="absolute z-10 top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                >
                  {submenu.map(({ _id, title, href }) => (
                    <Link
                      key={_id}
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary"
                    >
                      {title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
