import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";
import { H1, H3 } from "@/components/typography";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Page() {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div>
        <H1>Manage Products</H1>
      </div>
      <div className="flex flex-row justify-between items-center mt-10">
        <H3 className="text-2xl font-semibold">Products Listing</H3>
        <div className="flex flex-row items-center gap-4">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-base flex items-center">
                  Filter
                  <Filter className="ml-2" size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Filter Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="items-center gap-4">
                    <Label htmlFor="productname" className="text-right">
                      Product Name
                    </Label>
                    <Input id="name" placeholder="Enter Name" />
                  </div>
                  <div className="items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                      Amount
                    </Label>
                    <Input id="amount" placeholder="Enter Amount" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="text-right">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="saree">Saree</SelectItem>
                            <SelectItem value="lehenga">Lehenga</SelectItem>
                            <SelectItem value="family-sets">
                              Family Sets
                            </SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="color" className="text-right">
                        Color
                      </Label>
                      <Select>
                        <SelectTrigger>
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
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <Link href="/admin/products/add">
              <Button>
                <Plus size={16} className="mr-2" /> Add Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ScrollArea className="w-full mt-10">
          <div className="overflow-x-auto mt-6">
            <Table className="w-full">
              <TableHeader className="bg-[#F6F4F8]">
                <TableRow>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    S.N
                  </TableHead>

                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Product Name
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Category
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Price
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Stock
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Available Colors
                  </TableHead>
                  <TableHead className="py-4 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider ">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index} className="hover:bg-secondary/5">
                    <TableCell className="py-4 px-6 font-medium">
                      {index + 1}
                    </TableCell>
                    <TableCell className="py-4 px-6">Silk Saree</TableCell>
                    <TableCell className="py-4 px-6">Saree</TableCell>
                    <TableCell className="py-4 px-6">Rs. 5000.00</TableCell>
                    <TableCell className="py-4 px-6">50</TableCell>
                    <TableCell className="py-4 px-6">4</TableCell>
                    <TableCell className="py-4 px-6 text-right">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="text-black bg-white hover:bg-primary hover:text-white border border-primary px-2 sm:px-4 py-2 rounded"
                        >
                          Edit
                        </Button>
                        <Button className="bg-red-600 text-white  px-2 sm:px-4 py-2 rounded">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
