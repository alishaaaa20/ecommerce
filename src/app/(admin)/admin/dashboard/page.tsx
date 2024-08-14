"use client";
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { Filter, Search, Tag, UserCircleIcon } from "lucide-react";
import { H1, H3 } from "@/components/typography";
import RevenueChart from "@/components/Admin/dashboard/RevenueChart";
import { TbMoneybag } from "react-icons/tb";
import Revenue from "@/components/Admin/dashboard/Revenue";
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
import { Button } from "@/components/ui/button";

export default function Page() {
  const cards = [
    {
      title: "Sales",
      count: 50,
      color: "bg-[#CBEFF7]",
      icon: (
        <Tag
          size={40}
          className="bg-[#A5E3F1] text-[#327DD6] rounded-full p-2"
        />
      ),
    },
    {
      title: "Revenue",
      count: 1000,
      color: "bg-[#F5F3DE]",
      icon: (
        <TbMoneybag
          size={40}
          className="bg-[#ECECB2] text-[#D6D61F] rounded-full p-2"
        />
      ),
    },
    {
      title: "Orders",
      count: 100,
      color: "bg-[#DEF5EA]",
      icon: (
        <FaClipboardList
          size={40}
          className="bg-[#BCF3D9] text-[#28A569] rounded-full p-2"
        />
      ),
    },
    {
      title: "Customers",
      count: 10,
      color: "bg-[#F5DEDE]",
      icon: (
        <UserCircleIcon
          size={40}
          className="bg-[#EBAFAF] text-[#EF4545] rounded-full p-2"
        />
      ),
    },
  ];

  return (
    <section className="container py-10 mx-auto overflow-hidden">
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 text-center border-none rounded-lg transform transition-transform hover:scale-105 ${card.color}`}
            >
              <div className="flex space-x-6">
                {card.icon}
                <H3 className="text-2xl font-semibold">{card.title}</H3>
              </div>
              <H1 className="mt-8">{card.count}</H1>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 border p-6 rounded-lg">
        <H3 className="text-2xl font-semibold">Revenue Chart</H3>
        <RevenueChart />
      </div>
      <div className="mt-16 border p-6 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between ">
          <div className="flex gap-4">
            <H3 className="text-2xl font-semibold">Revenue</H3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Updates</SelectLabel>
                  <SelectItem value="apple">Today</SelectItem>
                  <SelectItem value="banana">Yesterday</SelectItem>
                  <SelectItem value="blueberry">This week</SelectItem>
                  <SelectItem value="grapes">This Month</SelectItem>
                  <SelectItem value="pineapple">All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Input placeholder="Search" />
              <Search className="absolute ml-[150px] text-primary " size={20} />
            </div>
            <Button className="text-base">
              Filter
              <Filter className="ml-2" size={16} />
            </Button>
          </div>
        </div>
        <Revenue />
      </div>
    </section>
  );
}
