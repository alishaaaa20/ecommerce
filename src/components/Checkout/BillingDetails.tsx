"use client";
import React from "react";
import { H3, H4, P } from "../typography";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BillingDetails() {
  const router = useRouter();
  const STEP_PAYMENT = "payment";

  return (
    <section className="container py-10">
      <H3>Billing Details</H3>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((item) => (
              <tr className="border-b border-gray-300">
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src="/feature/anarkali1.svg"
                      alt="Anarkali Dress Material"
                      className="w-32 h-32 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <H4>Anarkali Dress Material</H4>
                      <P className="text-sm">
                        Size: <span className="text-muted-foreground">M</span>
                      </P>
                      <P className="text-sm">
                        Color:{" "}
                        <span className="text-muted-foreground">Red</span>
                      </P>
                      <P className="text-sm">
                        Qty: <span className="text-muted-foreground">1</span>
                      </P>
                    </div>
                  </div>
                </td>
                <td className="py-4 font-medium">Rs. 1,999.00</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4 border-b pb-2">
          <div className="space-y-2">
            <H4>Subtotal</H4>
            <H4>Shipping</H4>
            <H4>Discount</H4>
          </div>
          <div className="space-y-2">
            <H4>Rs. 1,999.00</H4>
            <H4>Rs. 0.00</H4>
            <H4>Rs. 199.00</H4>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <H3>Total</H3>
          <H3>Rs. 1,800.00</H3>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          variant={"outline"}
          type="submit"
          className="border-primary hover:text-white hover:bg-primary"
          onClick={() => router.push(`?step=${STEP_PAYMENT}`)}
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
