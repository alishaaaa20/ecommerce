import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function Page() {
  const calculateDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number
  ) => {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  return (
    <section className="container mx-auto py-10 px-4">
      <div className="flex flex-col">
        <h1 className="text-4xl font-extrabold text-center mb-8">Sarees</h1>
        <div className="flex flex-col md:flex-row py-8 md:justify-between  border-b-2 border-gray-300 gap-6 px-2">
          <div className="flex flex-wrap items-center gap-4 ">
            <h3 className="text-xl font-medium">Filter:</h3>
            <Select>
              <SelectTrigger className="w-[180px] focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select by Price</SelectLabel>
                  <SelectItem value="minPrice">
                    <span>Price: Low to High</span>
                  </SelectItem>
                  <SelectItem value="maxPrice">
                    <span>Price: High to Low</span>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center lg:gap-2 border rounded-lg">
              <input
                type="number"
                placeholder="From"
                className="border-none rounded p-2 w-[120px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="mx-2">to</span>
              <input
                type="number"
                placeholder="To"
                className="border-none rounded p-2 w-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="text-white p-2">Search</Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-lg font-medium">Sort By:</h3>
            <Select>
              <SelectTrigger className="w-[180px] focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Select Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Product by</SelectLabel>
                  <SelectItem value="Best-Selling">Best Selling</SelectItem>
                  <SelectItem value="Feature">Feature</SelectItem>
                  <SelectItem value="Latest-Product">Latest Product</SelectItem>
                  <SelectItem value="Old Product">Old Product</SelectItem>
                  <SelectItem value="Most-Popular">Most Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-md">20 results</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 py-10">
        {[...Array(8)].map((item) => (
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
