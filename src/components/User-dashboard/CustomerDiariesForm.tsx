"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { AiFillStar } from "react-icons/ai";

export default function CustomerDiariesForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="py-6 px-4 container mx-auto ">
      <form className="space-y-4">
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Add Photo
          </Label>
          <Input
            type="file"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Message
          </Label>
          <Textarea
            placeholder="Enter your message here..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Rating
          </Label>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index <= (rating || hover)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } bg-transparent border-none outline-none text-2xl cursor-pointer transition-colors duration-200`}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                >
                  <AiFillStar />
                </button>
              );
            })}
          </div>
        </div>
        <Button
          variant={"outline"}
          className="border border-primary text-black px-4 py-2 mt-4 rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-white"
        >
          Submit
        </Button>
      </form>
    </section>
  );
}
