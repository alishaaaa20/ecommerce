import React from "react";
import { H3 } from "../typography";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CreditCard } from "lucide-react";
import { Button } from "../ui/button";

export default function Payment() {
  return (
    <section className="container">
      <H3>Payment</H3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="/payment/esewa.svg"
          alt="eSewa Payment Method"
          className="w-full h-auto object-cover rounded-md"
        />
        <img
          src="/payment/khalti.svg"
          alt="Khalti Payment Method"
          className="w-full h-auto object-cover rounded-md"
        />
        <img
          src="/payment/imePay.svg"
          alt="ImePay Payment Method"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <Label htmlFor="cardNumber" className="text-md font-medium">
            Card Number
          </Label>
          <img
            src="/payment/cards.svg"
            alt="Card"
            className="w-[120px] object-cover"
          />
        </div>
        <div className="relative mt-2 justify-between flex">
          <Input
            type="text"
            id="cardNumber"
            placeholder="Enter your card number"
            className="w-full mt-2 p-2  border border-gray-300 rounded-md"
          />
          <CreditCard className="absolute top-3.5 right-2 pointer-events-none" />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          variant={"outline"}
          type="submit"
          className="border-primary hover:text-white hover:bg-primary"
        >
          Place Order
        </Button>
      </div>
    </section>
  );
}
