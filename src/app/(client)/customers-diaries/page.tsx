import React from "react";
import Link from "next/link";

export default function CustomerDiaries() {
  return (
    <section className="py-16 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Customer Diaries
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Link href="/customers-diaries/[id]slug?1">
            <div
              key={i}
              className="flex flex-col rounded-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <img
                src="/girl.jpg"
                alt="customer-avatar"
                className="object-cover h-[250px] w-full rounded-lg"
              />

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src="/girl.svg"
                    alt="quote"
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div className="flex flex-col ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Jane Doe
                    </h3>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, j) => (
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

                <p className="text-gray-700 leading-relaxed text-sm">
                  "I love the quality of the products. The packaging is also
                  very nice."
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
