"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // Do not render the footer on admin paths
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <section
      className="w-full text-white relative z-0 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url(/footer/bg.svg)",
      }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-50"
        style={{
          backgroundImage: "url(/footer/flower.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom -130px",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center px-4 py-12">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Sign up for our Newsletter</h1>
          <p className="max-w-sm text-sm mt-2">
            Subscribe to our Newsletter and stay up to date with our latest news
            and products.
          </p>
          <div className="flex border rounded-full bg-white border-secondary mt-4 w-full max-w-md overflow-hidden">
            <Input
              placeholder="Enter your email"
              className="border-none flex-grow text-black outline-none px-4 py-2"
            />
            <Button className="bg-secondary text-white rounded-none px-6 py-2 hover:bg-primary-dark">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="border-t border-dashed border-white mt-12 w-full max-w-4xl"></div>
      </div>
      <div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto mt-12 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <img src="/logo.svg" alt="logo" className="h-12" />
              <h1 className="text-2xl ml-2 font-bold">CaptivatingCurves</h1>
            </div>
            <div className="mt-4 flex flex-col items-center md:items-start">
              <p className="hover:underline flex justify-center">
                <MapPin size={16} />
                <span className="ml-2">Imadol, Lalitpur</span>
              </p>
              <p className="hover:underline flex items-center justify-center mt-2">
                <Phone size={16} />
                <span className="ml-2">
                  <a href="tel:+977-123456789">+977-123456789</a>
                </span>
              </p>
              <p className="hover:underline flex items-center justify-center mt-2">
                <Mail size={16} />
                <span className="ml-2">
                  <a href="mailto:metalogic@gmail.com">metalogic@gmail.com</a>
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 md:mt-0">
            <h1 className="font-bold text-xl">Quick Links</h1>
            <div className="mt-4 flex flex-col items-center md:items-start md:ml-8">
              <Link href="#" className="hover:underline mt-2">
                Home
              </Link>
              <Link href="#" className="hover:underline mt-2">
                About Us
              </Link>
              <Link href="#" className="hover:underline mt-2">
                Categories
              </Link>
              <Link href="#" className="hover:underline mt-2">
                Customers Diaries
              </Link>
              <Link href="#" className="hover:underline mt-2">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-8 md:mt-0">
            <h1 className="font-bold text-xl">Support</h1>
            <div className="mt-4 flex flex-col items-center md:items-start md:ml-20">
              <Link href="#" className="hover:underline mt-2">
                FAQ
              </Link>
              <Link href="#" className="hover:underline mt-2">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:underline mt-2">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-8 md:mt-0">
            <h1 className="font-bold text-xl">Follow Us</h1>
            <ul className="flex gap-4 mt-4">
              <li className="rounded-full border-2 p-2 hover:border-secondary">
                <Link href="https://www.facebook.com" target="_blank">
                  <FaFacebook size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2 hover:border-secondary">
                <Link href="https://www.instagram.com" target="_blank">
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2 hover:border-secondary">
                <Link href="https://www.tiktok.com" target="_blank">
                  <FaTiktok size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2 hover:border-secondary">
                <Link href="https://wa.me/980000000" target="_blank">
                  <FaWhatsapp size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-solid border-white mt-20 w-full max-w-6xl mx-auto"></div>
        <div className="flex flex-col relative lg:flex-row lg:justify-between container py-8 text-center lg:text-left">
          <p>
            © 2024{" "}
            <span className="text-[#F8D352] hover:underline">
              CaptivatingCurves.{" "}
            </span>{" "}
            All Rights Reserved.{" "}
          </p>
          <p className="lg:ml-4 mt-4 lg:mt-0">
            Powered by:{" "}
            <Link
              href="https://metalogic.com.np/"
              className="hover:underline ml-1 cursor-pointer text-[#F8D352]"
              target="_blank"
            >
              Metalogic Pvt. Ltd
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
