import React from "react";
import { Button } from "../ui/button";

export default function SpecialOffer() {
  return (
    <section className="py-20 container mx-auto relative">
      <h1 className="text-4xl font-bold text-center mb-12">Special Offers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
        <div className="relative h-[500px]">
          <img
            src="/offer/sari1.svg"
            alt="Ruffle sari Full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-start p-8">
            <div className="text-white">
              <h3 className="text-4xl font-bold mb-4">JUST ONE DAY</h3>
              <h3 className="text-4xl text-yellow-400 font-bold mb-4">
                SALE UPTO 50% OFF
              </h3>
              <p className="mb-6 leading-relaxed text-lg">
                Women Saree with Blouse Piece.
              </p>
              <Button
                variant={"outline"}
                className="text-white bg-transparent border border-white hover:bg-primary hover:text-white"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-[250px]">
            <img
              src="/offer/sari2.svg"
              alt="Ruffle sari Closeup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className="relative h-[250px]">
            <img
              src="/offer/sari3.svg"
              alt="Ruffle sari Custom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0  z-0 mt-[-100px]">
        <img
          src="/feature/flower.svg"
          alt="Flower Decoration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
