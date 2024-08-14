"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import React from "react";

const saris = [
  {
    id: 1,
    title: "Sari 1",
    image: "/home/sari1.svg",
  },
  {
    id: 2,
    title: "Sari 2",
    image: "/home/sari2.svg",
  },
  {
    id: 3,
    title: "Sari 3",
    image: "/home/sari3.svg",
  },
];

export default function Hero() {
  const [currentSari, setCurrentSari] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSari((prevSari) => (prevSari + 1) % saris.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative lg:h-[75vh] flex items-center bg-cover bg-center overflow-hidden container"
      style={{
        backgroundImage: "url(/home/heroBg.svg)",
      }}
    >
      <div className="absolute inset-0 bg-black/50 opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 overflow-hidden md:mt-10 lg:mt-0 lg:ml-[-200px] md:ml-[-120px]">
            <motion.img
              key={saris[currentSari].id}
              src={saris[currentSari].image}
              alt={saris[currentSari].title}
              className="inset-0 m-auto object-contain max-h-full max-w-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left text-white lg:ml-[-100px] lg:mt-0 mt-8">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Elegance Draped in Tradition
            </h1>
            <p className="mt-4 text-lg sm:text-xl mt-8 md:mb-4 lg:mb-0 mb-0">
              Shop Our New Arrivals and Get Ready for the Season. Whether you're
              looking for innovative solutions, premium products, or expert
              services, we're here to exceed your expectations.
            </p>
            <div className="mt-8">
              <Button
                variant={"outline"}
                className="bg-transparent text-white px-6 py-3 rounded-lg font-bold border border-white hover:bg-primary hover:text-white"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
