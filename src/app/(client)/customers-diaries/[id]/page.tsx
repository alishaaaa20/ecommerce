import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="relative flex flex-col py-8 justify-center items-center container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="lg:w-1/2 p-4">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/bestselling/sari1.svg"
              alt="Ruffle Anarkali Full"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="flex gap-4">
              {["sari1.svg", "sari1.svg", "sari1.svg"].map((src, i) => (
                <img
                  key={i}
                  src={`/bestselling/${src}`}
                  alt="Ruffle Anarkali"
                  className="w-full h-[100px] lg:h-[150px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-shrink-0">
              <img
                src="/girl.svg"
                alt="Jane Doe"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-md lg:text-lg font-semibold">Jane Doe</h3>
              <div className="flex items-center mb-2">
                {[...Array(3)].map((_, j) => (
                  <img
                    key={j}
                    src="/star.svg"
                    alt="star"
                    className="w-4 h-4 text-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-gray-600 text-justify leading-relaxed">
              "Beautiful saree, excellent quality and fast delivery! The quality
              is exceptional, and the craftsmanship is top-notch. The detailed
              weaving is truly a work of art. The quality is exceptional, and
              the craftsmanship is top-notch. The detailed weaving is truly a
              work of art. The quality is exceptional, and the craftsmanship is
              top-notch. The detailed weaving is truly a work of art. The
              quality is exceptional, and the craftsmanship is top-notch. The
              detailed weaving is truly a work of art."
            </p>
            <div>
              <Button
                variant={"outline"}
                className="p-2 rounded-lg mt-4 border-primary hover:bg-primary hover:text-white transition duration-300"
              >
                View Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
