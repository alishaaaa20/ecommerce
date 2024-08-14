"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PersonalDetailsForm() {
  const router = useRouter();
  const STEP_BILLING_DETAILS = "billingDetails";
  return (
    <section className="container py-10">
      <h1 className="text-xl font-medium">Shipping Address</h1>
      <form className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="mt-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="district" className="text-sm font-medium">
              District
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Baglung">Baglung</SelectItem>
                <SelectItem value="Kathmandu">Kathmandu</SelectItem>
                <SelectItem value="Pokhara">Pokhara</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="province" className="text-sm font-medium">
              Province
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bagmati">Bagmati</SelectItem>
                <SelectItem value="Gandaki">Gandaki</SelectItem>
                <SelectItem value="Koshi">Koshi</SelectItem>
                <SelectItem value="Lumbini">Lumbini</SelectItem>
                <SelectItem value="Madhesh">Madhesh</SelectItem>
                <SelectItem value="SudurPashhim">SudurPashhim</SelectItem>
                <SelectItem value="Karnali">Karnali</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="city" className="text-sm font-medium">
              City
            </Label>
            <Input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="postalCode" className="text-sm font-medium">
              Postal Code
            </Label>
            <Input
              type="text"
              id="postalCode"
              placeholder="Enter Postal Code"
              className="mt-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="ward" className="text-sm font-medium">
              Ward
            </Label>
            <Input
              type="text"
              id="ward"
              placeholder="Enter Ward Number"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="street" className="text-sm font-medium">
              Street
            </Label>
            <Input
              type="text"
              id="street"
              placeholder="Enter Street"
              className="mt-2"
            />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button
            variant={"outline"}
            type="submit"
            className="border-primary hover:text-white hover:bg-primary"
            onClick={() => router.push(`?step=${STEP_BILLING_DETAILS}`)}
          >
            Continue
          </Button>
        </div>
      </form>
    </section>
  );
}
