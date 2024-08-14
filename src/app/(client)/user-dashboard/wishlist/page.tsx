import React from "react";
import { H4, P } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="py-6 px-4 container">
      <div>
        <H4 className="lg:text-xl ">
          June-20, 2021 <span className="text-gray-500">--- </span> Order #1234
        </H4>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex items-center  mb-4 md:mb-0">
            <img
              src="/feature/anarkali1.svg"
              alt="Anarkali Dress Material"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
            />
            <div className="ml-4">
              <H4>Anarkali Dress Material</H4>
              <P className="text-md">Rs. 20,000</P>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4">
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Move to Cart
            </Button>
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex items-center  mb-4 md:mb-0">
            <img
              src="/feature/anarkali1.svg"
              alt="Anarkali Dress Material"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
            />
            <div className="ml-4">
              <H4>Anarkali Dress Material</H4>
              <P className="text-md">Rs. 20,000</P>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4">
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Move to Cart
            </Button>
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <H4 className="lg:text-xl">
          June-30, 2021 <span className="text-gray-500">--- </span> Order #1234
        </H4>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex items-center  mb-4 md:mb-0">
            <img
              src="/feature/anarkali1.svg"
              alt="Anarkali Dress Material"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
            />
            <div className="ml-4">
              <H4>Anarkali Dress Material</H4>
              <P className="text-md">Rs. 20,000</P>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4">
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Move to Cart
            </Button>
            <Button
              variant="outline"
              className="text-black border-primary hover:bg-primary hover:text-white"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
