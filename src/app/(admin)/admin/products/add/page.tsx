import { H2 } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <H2 className="text-3xl font-semibold">Add Product</H2>
      <div className="mt-10">
        <form>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="productname">Product Name</Label>
              <Input
                type="text"
                id="productname"
                name="productname"
                placeholder="Enter Product Name"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="productprice">Product Price</Label>
              <Input
                type="text"
                id="productprice"
                name="productprice"
                placeholder="Enter Product Price"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
            <div>
              <Label htmlFor="productcategory">Category</Label>
              <Select>
                <SelectTrigger className="mt-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="saree">Saree</SelectItem>
                    <SelectItem value="lehenga">Lehenga</SelectItem>
                    <SelectItem value="family-sets">Family Sets</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="productquantity">Quantity</Label>
              <Input
                type="text"
                id="productquantity"
                name="productquantity"
                placeholder="Enter Product Quantity"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
            <div>
              <Label htmlFor="productcolor">Color</Label>
              <Select>
                <SelectTrigger className="mt-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="productsize">Size</Label>
              <Input
                type="text"
                id="productsize"
                name="productsize"
                placeholder="Enter Product Size"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-6">
            <Label htmlFor="productdescription">Description</Label>
            <Textarea
              id="productdescription"
              name="productdescription"
              placeholder="Enter Product Description"
              className="mt-2 h-32 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mt-6">
            <Label htmlFor="productimage">Add Photos</Label>
            <Input
              type="file"
              id="productimage"
              name="productimage"
              accept="image/*"
              multiple
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mt-6">
            <Button className="text-white rounded-md py-2 shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
