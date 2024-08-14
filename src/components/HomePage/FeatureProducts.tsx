import React from "react";
import { Button } from "../ui/button";

export default function FeatureProducts() {
  return (
    <>
      <section className="relative flex items-center justify-center py-8 container">
        <div className="mx-auto flex flex-col md:flex-row items-center z-10">
          <div className="md:w-[600px] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src="/feature/anarkali1.svg"
                alt="Ruffle Anarkali Full"
                className="w-full h-[300px] object-cover"
              />
              <div className="flex flex-col">
                <img
                  src="/feature/anarkali2.svg"
                  alt="Ruffle Anarkali Closeup"
                  className="w-full h-[150px] object-cover"
                />
                <img
                  src="/feature/anarkali3.svg"
                  alt="Ruffle Anarkali Custom"
                  className="w-full h-[150px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Ruffle Anarkali</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Embrace timeless elegance with our Elegant Ruffle Anarkali. This
              exquisite piece combines traditional charm with contemporary
              flair, making it a perfect addition to your wardrobe for festive
              occasions, weddings, and special events. Crafted from premium
              quality georgette, this Anarkali promises comfort and grace with
              every wear. Available in a range of vibrant colors and sizes,
              ensuring you find the perfect match for your style and body type.
            </p>
            <Button
              variant={"outline"}
              className="text-black px-6 py-2 rounded-lg transition-transform transform hover:scale-105 border border-primary bg-white hover:bg-primary hover:text-white"
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-[120px]  ">
          <img
            src="/feature/flower.svg"
            alt="Flower"
            className=" object-cover w-[400px] h-full"
          />
        </div>
      </section>
      <section className="relative flex items-center justify-center py-8 container">
        <div className="mx-auto flex flex-col md:flex-row items-center z-10">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Ruffle Anarkali</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Embrace timeless elegance with our Elegant Ruffle Anarkali. This
              exquisite piece combines traditional charm with contemporary
              flair, making it a perfect addition to your wardrobe for festive
              occasions, weddings, and special events. Crafted from premium
              quality georgette, this Anarkali promises comfort and grace with
              every wear. Available in a range of vibrant colors and sizes,
              ensuring you find the perfect match for your style and body type.
            </p>
            <Button
              variant={"outline"}
              className="text-black px-6 py-2 rounded-lg transition-transform transform hover:scale-105 border border-primary bg-white hover:bg-primary hover:text-white"
            >
              Order Now
            </Button>
          </div>
          <div className="md:w-[600px] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src="/feature/anarkali1.svg"
                alt="Ruffle Anarkali Full"
                className="w-full h-[300px] object-cover"
              />
              <div className="flex flex-col">
                <img
                  src="/feature/anarkali2.svg"
                  alt="Ruffle Anarkali Closeup"
                  className="w-full h-[150px] object-cover"
                />
                <img
                  src="/feature/anarkali3.svg"
                  alt="Ruffle Anarkali Custom"
                  className="w-full h-[150px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 -mt-[100px]">
          <img
            src="/feature/flowerleft.svg"
            alt="Flower"
            className="object-cover w-[450px] h-full"
          />
        </div>
      </section>
    </>
  );
}
