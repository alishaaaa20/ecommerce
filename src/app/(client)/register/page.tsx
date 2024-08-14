import Register from "@/components/Forms/Register";
import { H2 } from "@/components/typography";
import React from "react";

export default function page() {
  return (
    <div>
      <H2 className="font-bold text-center py-10">Register</H2>
      <Register />
    </div>
  );
}
