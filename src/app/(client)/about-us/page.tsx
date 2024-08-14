import { H1, H3, P } from "@/components/typography";
import React from "react";
import { CircleCheck, Truck, Award, ShoppingCart } from "lucide-react";

const cardData = [
  {
    icons: <CircleCheck size={40} />,
    title: "24/7 Availability",
    bgColor: "bg-[#F1EDF4]",
  },
  {
    icons: <Truck size={40} />,
    title: "Free Delivery",
    bgColor: "bg-[#F1EDF4]",
  },
  {
    icons: <Award size={40} />,
    title: "Quality Products",
    bgColor: "bg-[#F1EDF4]",
  },
  {
    icons: <CircleCheck size={40} />,
    title: "Safe Payment",
    bgColor: "bg-[#F1EDF4]",
  },
];

export default function page() {
  return (
    <section className="container py-10">
      <H1>About Us</H1>
      <div className="flex lg:flex-row flex-col gap-4 mt-10">
        <div className="lg:w-[500px]">
          <img
            src="/bestselling/sari2.svg"
            alt="Ruffle Anarkali Full"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col lg:w-[800px] gap-4">
          <P className="text-xl">
            <strong>Welcome to CaptivatingCurves Clothing Shop!</strong>
          </P>
          <P className="text-justify">
            At CaptivatingCurves, we believe that fashion should celebrate every
            curve and empower every individual. Our mission is to provide
            stylish, high-quality clothing that embraces and enhances the
            natural beauty of all body types. Whether you're looking for elegant
            evening wear, trendy everyday outfits, or versatile pieces that can
            transition from day to night, we have something for everyone. We
            noticed that many brands neglected the unique needs and preferences
            of curvy and plus-size individuals. Determined to change this, we
            set out to create a brand that offers fashionable, flattering, and
            comfortable clothing for all shapes and sizes. <br /> <br />
            At CaptivatingCurves, customer satisfaction is our top priority. We
            strive to provide an exceptional shopping experience, from easy
            navigation on our website to fast and reliable shipping. Our
            dedicated customer service team is always here to help with any
            questions or concerns you may have.
          </P>
        </div>
      </div>
      <div className="mt-10">
        <div className="py-10 text-center">
          <H3 className="text-3xl font-semibold">Our Services</H3>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} flex h-[150px] w-[250px] items-center justify-center rounded-lg  transition-transform duration-300 hover:scale-105 hover:drop-shadow-xl`}
            >
              <div className="flex flex-col items-center justify-center">
                {card.icons}
                <H3 className="text-xl font-semibold text-black mt-2">
                  {card.title}
                </H3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20">
        <H3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Collections
        </H3>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full mx-auto  transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 relative group cursor-pointer"
            >
              <div className="absolute top-2 right-2  text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShoppingCart size={30} />
              </div>
              <img
                src="/bestselling/sari1.svg"
                alt="product"
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900">
                  Traditional Style Saree
                </h2>
                <div className="flex flex-row justify-between items-center ">
                  <div className="text-lg font-bold text-gray-900">
                    <span>Rs. 999.99</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
