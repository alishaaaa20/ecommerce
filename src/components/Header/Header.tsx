"use client";
import React, { useEffect, useState } from "react";
import NavLinks from "../Navbar/Navbar";
import { Button } from "../ui/button";
import { Popover } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { navData } from "../Navbar/navData";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Input } from "../ui/input";
import { Search, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface MobileNavLinkProps {
  children: React.ReactNode;
  href: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ children, href }) => {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="flex rounded-lg px-4 py-2 items-center text-base text-gray-700 transition-colors hover:text-white hover:bg-primary w-[170px]"
    >
      {children}
    </Popover.Button>
  );
};

const MobileSubMenu: React.FC<{ submenu: any[] }> = ({ submenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <>
      <Link href="/categories" passHref>
        <button
          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          className="flex justify-between items-center w-full text-base tracking-tight text-gray-700 py-2  transition-colors hover:text-white hover:bg-primary w-[170px] rounded-lg px-4"
        >
          Categories
          {isSubmenuOpen ? (
            <ChevronUp className="ml-2" />
          ) : (
            <ChevronDown className="ml-2" />
          )}
        </button>
      </Link>
      <AnimatePresence>
        {isSubmenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4"
          >
            {submenu.map(({ _id, title, href }) => (
              <MobileNavLink href={href} key={_id}>
                {title}
              </MobileNavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const pathname = usePathname();
  // Do not render the header on admin paths
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white  ${
        isScrolled && "shadow-md shadow-primary/10"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-8 lg:px-12 container mx-auto">
        {/* Logo and Site Title */}
        <div className="relative z-10 flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-20 h-10 md:w-24 md:h-12 lg:ml-[-50px] ml-[-20px]"
              />
              <h1 className="text-lg md:text-xl font-bold text-gray-900 lg:block md:block hidden ml-[-18px]">
                CaptivatingCurves
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <NavLinks />
        </nav>

        {/* Right-side icons and buttons */}
        <div className="flex items-center space-x-4 lg:mr-[-30px]">
          {/* Search Input */}
          <div className="relative">
            <Input
              placeholder="Search"
              className="rounded-full border border-primary px-4 py-2"
            />
            <Search
              className="text-primary cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"
              size={20}
            />
          </div>

          {/* Cart Button */}
          <Link href="/cart" passHref>
            <Button className=" bg-transparent text-black hover:bg-primary-dark px-2 ">
              <ShoppingCart size={20} />
            </Button>
          </Link>

          {/* Login Button */}
          <div className="hidden lg:block">
            <Link href="/login" passHref>
              <Button className="border border-primary  hover:bg-secondary text-white ">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Popover className="lg:hidden">
            {({ open }) => (
              <>
                <Popover.Button
                  className="relative z-10  rounded-lg text-gray-700 hover:text-black focus:outline-none"
                  aria-label="Toggle site navigation"
                >
                  {open ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <TbMenu2 className="text-2xl" />
                  )}
                </Popover.Button>
                <AnimatePresence>
                  {open && (
                    <>
                      <Popover.Overlay
                        static
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-primary/5 backdrop-blur"
                      />
                      <Popover.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 font-medium px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="space-y-2"
                        >
                          {navData.map(({ _id, title, href, submenu }) =>
                            submenu ? (
                              <MobileSubMenu key={_id} submenu={submenu} />
                            ) : (
                              <MobileNavLink href={href} key={_id}>
                                {title}
                              </MobileNavLink>
                            )
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="mt-4 flex flex-col gap-4"
                        >
                          <Button
                            variant="outline"
                            className="border border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Login
                          </Button>
                        </motion.div>
                      </Popover.Panel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
