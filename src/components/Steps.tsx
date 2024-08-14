"use client";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Steps() {
  const searchParams = useSearchParams();
  const stepNo = searchParams.get("step");
  let isStep1 = stepNo === "1";
  let isStep2 = stepNo === "2";
  let isStep3 = stepNo === "3";
  let isStep4 = stepNo === "4";
  return (
    <div className=" mx-auto max-w-xl  items-center flex justify-between">
      {/* CIRCLE */}
      <div className=" relative">
        <div
          className={cn(
            " grid place-content-center  aspect-square h-8 w-8  rounded-full  bg-secondary font-bold text-white"
          )}
        >
          1
        </div>
        <img
          src="/signup/gradcap.svg"
          alt="gradcap"
          className={` ${
            isStep1 ? "opacity-100" : "opacity-0"
          }  absolute transition-all duration-200 ease-linear  top-[-11px] left-[8px] rotate-[10deg] w-[50px]`}
        />
      </div>
      {/* LINE */}
      <div
        className={cn(
          " h-1 w-full flex-1 bg-gray-300  transition-all  duration-200 ease-linear"
        )}
      >
        <div
          className={cn(
            "h-1 transition-all duration-200 ease-linear bg-secondary",
            stepNo! > "1" ? "w-full" : "w-0"
          )}
        ></div>
      </div>
      {/* CIRCLE */}
      <div className=" relative">
        <div
          className={cn(
            " grid place-content-center  aspect-square h-8 w-8  rounded-full  bg-primary font-bold text-white",
            (isStep2 || stepNo! >= "2") && "bg-secondary"
          )}
        >
          2
        </div>
        <img
          src="/signup/gradcap.svg"
          alt="gradcap"
          className={` ${
            isStep2 ? "opacity-100" : "opacity-0"
          }  absolute transition-all duration-200 ease-linear  top-[-11px] left-[8px] rotate-[10deg] w-[50px]`}
        />
      </div>
      {/* LINE */}
      <div
        className={cn(
          " h-1 w-full flex-1 bg-gray-300  transition-all  duration-200 ease-linear"
        )}
      >
        <div
          className={cn(
            "h-1 transition-all duration-200 ease-linear bg-secondary",
            stepNo! > "2" ? "w-full" : "w-0"
          )}
        ></div>
      </div>
      {/* CIRCLE */}
      <div className=" relative">
        <div
          className={cn(
            " grid place-content-center  aspect-square h-8 w-8  rounded-full  bg-primary font-bold text-white",
            (isStep3 || stepNo! >= "3") && "bg-secondary"
          )}
        >
          3
        </div>
        <img
          src="/signup/gradcap.svg"
          alt="gradcap"
          className={` ${
            isStep3 ? "opacity-100" : "opacity-0"
          }  absolute transition-all duration-200 ease-linear  top-[-11px] left-[8px] rotate-[10deg] w-[50px]`}
        />
      </div>
      {/* LINE */}
      {/* <div
        className={cn(
          " h-1 w-full flex-1 bg-gray-300  transition-all  duration-200 ease-linear"
        )}
      >
        <div
          className={cn(
            "h-1 transition-all duration-200 ease-linear bg-secondary",
            stepNo! > "3" ? "w-full" : "w-0"
          )}
        ></div>
      </div> */}
      {/* CIRCLE */}
      {/* <div className=" relative">
        <div
          className={cn(
            " grid place-content-center  aspect-square h-8 w-8  rounded-full  bg-primary font-bold text-white",
            (isStep4 || stepNo! >= "4") && "bg-secondary"
          )}
        >
          4
        </div>
        <img
          src="/signup/gradcap.svg"
          alt="gradcap"
          className={` ${
            isStep4 ? "opacity-100" : "opacity-0"
          }  absolute transition-all duration-200 ease-linear  top-[-11px] left-[8px] rotate-[10deg] w-[50px]`}
        />
      </div> */}
    </div>
  );
}
