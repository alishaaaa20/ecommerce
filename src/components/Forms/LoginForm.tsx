import React from "react";
import { H2 } from "../typography";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="w-full max-w-md p-8 ">
        <H2 className="font-bold text-center mb-6">Login</H2>
        <form className="space-y-6">
          <div>
            <Label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block mb-2 text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-medium text-primary hover:text-secondary"
            >
              Forgot your password?
            </a>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="font-bold text-xl p-4 w-full bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
            >
              Login
            </Button>
          </div>
        </form>
        <p className="text-md text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-primary hover:text-secondary"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
