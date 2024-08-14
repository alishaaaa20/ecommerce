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
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
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

export default function Page() {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div>
        <H1>Manage Orders</H1>
      </div>
      <div className="flex flex-row justify-between items-center mt-10">
        <div className="flex flex-row items-center gap-4">
          <H3 className="text-2xl font-semibold">Orders</H3>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Updates</SelectLabel>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="this-week">This week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="relative flex items-center gap-2 w-full">
            <Input placeholder="Search" className="pr-10" />
            <Search className="absolute right-3 text-primary" size={20} />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-base flex items-center">
                Filter
                <Filter className="ml-2" size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Filter Order</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter Name" />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Amount
                  </Label>
                  <Input id="amount" placeholder="Enter Amount" />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter Phone"
                    className="col-span-3"
                  />
                </div>
                <div className="">
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="payment" className="text-right">
                      Payment
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="cod">COD</SelectItem>
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
                    Date
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Product
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Status
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Phone
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Amount
                  </TableHead>
                  <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Payment
                  </TableHead>
                  <TableHead className="py-4 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider text-right">
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
                    <TableCell className="py-4 px-6">2022-03-20</TableCell>
                    <TableCell className="py-4 px-6">Alisha Khatri</TableCell>
                    <TableCell className="py-4 px-6">Silk Saree</TableCell>
                    <TableCell className="py-4 px-6">
                      <span className="text-blue-400">Pending</span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <a href="tel:9841234567" className="text-primary">
                        9841234567
                      </a>
                    </TableCell>
                    <TableCell className="py-4 px-6">Rs. 500.00</TableCell>
                    <TableCell className="py-4 px-6">
                      <span className="text-green-400">Paid</span>
                    </TableCell>
                    <TableCell className="py-4 px-6 text-right">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="text-black bg-white hover:bg-primary hover:text-white border border-primary px-2 sm:px-4 py-2 rounded"
                        >
                          View
                        </Button>
                        <Button className="bg-primary text-white border border-primary px-2 sm:px-4 py-2 rounded">
                          Manage
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
