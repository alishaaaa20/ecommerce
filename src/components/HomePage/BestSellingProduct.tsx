import React from "react";
import { ShoppingCart } from "lucide-react";

export default function BestSellingProduct() {
  // Function to calculate discount percentage
  const calculateDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number
  ) => {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  return (
    <section className="overflow-hidden py-20 container">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Best Selling Products
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-full mx-auto relative group cursor-pointer"
          >
            <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
              <img
                src="/bestselling/sari3.svg"
                alt="product"
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 "
              />
              <img
                src="/bestselling/sari4.svg"
                alt="product-hover"
                className="w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <div className="absolute top-2 right-2 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShoppingCart size={30} />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-medium mb-2 text-gray-900">
                Traditional Style Saree
              </h2>
              <div className="flex flex-row justify-between items-center">
                <div className="text-lg font-bold text-gray-900">
                  <span>Rs. 999.99</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="line-through text-gray-500 mr-2">
                    Rs. 1299.99
                  </span>
                  {calculateDiscountPercentage(1299.99, 999.99)}% off
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
