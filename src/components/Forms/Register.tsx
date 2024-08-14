import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Register() {
  return (
    <section className="container mb-20 max-w-2xl mx-auto">
      <form className="bg-white rounded-lg p-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </Label>
            <Input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <Label
              htmlFor="lastname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </Label>
            <Input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mt-4">
          <Label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <Label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone No.
          </Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <Label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </Label>
          <Input
            type="text"
            id="address"
            placeholder="Enter your address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <Label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <Label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            type="submit"
            className="font-bold text-lg py-3 w-full bg-primary text-white rounded-md hover:bg-secondary transition duration-300 focus:outline-none focus:shadow-outline"
          >
            Register
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-md text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:text-secondary"
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
