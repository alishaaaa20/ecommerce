import { Card } from "@/components/ui/card";
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { Tag, ClipboardCopy } from "lucide-react";
import { H1, H3 } from "@/components/typography";
import OrderStatusChart from "@/components/User-dashboard/Chart";
import RecentOrders from "@/components/User-dashboard/RecentOrders";

export default function Page() {
  return (
    <section className="container py-10 mx-auto">
      <div className="border border-gray-200 rounded-lg p-6  bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-4">
          <Card className="p-6 text-center border-none bg-[#CBEFF7]  transform transition-transform hover:scale-105">
            <div className="flex space-x-6">
              <Tag
                size={40}
                className="bg-[#A5E3F1] text-[#327DD6] rounded-full p-2"
              />
              <H3 className="text-2xl font-semibold">Purchase</H3>
            </div>

            <H1 className="mt-8">50</H1>
          </Card>
          <Card className="p-6 text-center border-none bg-[#DEF5EA]  transform transition-transform hover:scale-105">
            <div className="flex space-x-6">
              <FaClipboardList
                size={40}
                className="bg-[#BCF3D9] text-[#28A569] rounded-full p-2"
              />
              <H3 className="text-2xl font-semibold">Orders</H3>
            </div>

            <H1 className="mt-8">100</H1>
          </Card>
          <Card className="p-6 text-center border-none bg-[#F5DEDE] transform transition-transform hover:scale-105">
            <div className="flex space-x-6">
              <ClipboardCopy
                size={40}
                className="bg-[#EBAFAF] text-[#EF4545] rounded-full p-2"
              />
              <H3 className="text-2xl font-semibold">Returns</H3>
            </div>
            <H1 className="mt-8">10</H1>
          </Card>
        </div>
      </div>
      <div className="mt-16 border p-6 rounded-lg ">
        <H3 className="text-2xl font-semibold">Order Status</H3>
        <OrderStatusChart />
      </div>
      <div className="mt-16 border p-6 rounded-lg ">
        <H3 className="text-2xl font-semibold">Recent Orders</H3>
        <RecentOrders />
      </div>
    </section>
  );
}
