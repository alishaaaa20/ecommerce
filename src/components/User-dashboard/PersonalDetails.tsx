import React from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { Mail, MapPin, Pencil, Phone } from "lucide-react";
import { H2, H3, P } from "../typography";

export default function PersonalDetails() {
  return (
    <div className="flex lg:flex-row flex-col py-10 lg:space-x-10 space-y-10 lg:space-y-0">
      <div className="lg:w-1/3 w-full flex flex-col items-center">
        <img
          src="/girl.jpg"
          alt="My Photo"
          className="w-[200px] h-[200px] rounded-full object-cover shadow-lg"
        />
        <div className="mt-6 text-center flex flex-col items-center justify-center">
          <H2 className="font-semibold text-center">Jane Doe</H2>
          <P className="font-medium flex items-center text-center">
            Edit Profile <Pencil size={20} className="ml-2" />
          </P>
        </div>
        <div className="flex flex-col items-start text-left">
          <P className="text-gray-600 mt-2 flex items-center">
            <MapPin size={20} className="text-gray-700" />
            <span className="ml-3">Sankhamul, New Baneshwor</span>
          </P>
          <P className="text-gray-600  flex items-center">
            <Mail size={20} className="text-gray-700" />
            <span className="ml-3">
              <a href="mailto:janedoe@gmail.com" className="hover:underline">
                janedoe@gmail.com
              </a>
            </span>
          </P>
          <P className="text-gray-600 flex items-center">
            <Phone size={20} className="text-gray-700" />
            <span className="ml-3">+234 123 456 7890</span>
          </P>
        </div>
      </div>
      <div className="lg:w-2/3 w-full container">
        <H2 className="font-semibold">Manage Personal Details</H2>
        <PersonalDetailsForm />
      </div>
    </div>
  );
}
