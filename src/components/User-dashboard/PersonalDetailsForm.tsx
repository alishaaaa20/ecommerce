import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function PersonalDetailsForm() {
  return (
    <form className="py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            className="bg-transparent "
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            className="bg-transparent "
          />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="bg-transparent "
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          className="bg-transparent "
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          type="text"
          placeholder="Enter your address"
          className="bg-transparent "
        />
      </div>

      <div className="flex justify-end">
        <Button
          variant={"outline"}
          className="mt-4 hover:bg-primary border border-primary text-black hover:text-white"
        >
          Update
        </Button>
      </div>
    </form>
  );
}
