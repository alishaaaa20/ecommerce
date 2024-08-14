import React, { ReactNode } from "react";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Admin/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex ">
      <div className="fixed top-0 z-50">
        <Sidebar />
      </div>
      <div className="min-h-screen flex-1 p-4 lg:ml-[260px] ml-[60px]">
        {children}
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
