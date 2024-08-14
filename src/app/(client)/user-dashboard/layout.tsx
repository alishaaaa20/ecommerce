import React, { ReactNode } from "react";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import SideNavbar from "@/components/User-dashboard/SideNavbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="min-h-screen flex-1 p-4">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
