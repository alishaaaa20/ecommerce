import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { H2 } from "../typography";

export default function ChangePassword() {
  return (
    <section className=" py-10">
      <H2 className="">Change Password</H2>
      <form className="mt-6">
        <div>
          <Label htmlFor="currentpassword">Current Password</Label>
          <Input
            id="currentpassword"
            type="password"
            placeholder="Enter your current password"
            className="w-[300px] bg-transparent "
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="newpassword">New Password</Label>
          <Input
            id="newpassword"
            type="password"
            placeholder="Enter your new password"
            className="w-[300px] bg-transparent "
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input
            id="confirmpassword"
            type="password"
            placeholder="Confirm your new password"
            className="w-[300px] bg-transparent "
          />
        </div>
        <div className="flex justify-starts">
          <Button
            variant={"outline"}
            className="mt-4 hover:bg-primary border border-primary hover:text-white"
          >
            Update
          </Button>
        </div>
      </form>
    </section>
  );
}
