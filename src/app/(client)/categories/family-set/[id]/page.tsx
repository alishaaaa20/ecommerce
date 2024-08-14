import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Page() {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ].map((color, i) => (
    <div
      key={i}
      className="w-10 h-8 rounded border-2 border-gray-300"
      style={{ backgroundColor: color }}
    />
  ));

  const calculateDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number
  ) => {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"].map((size, i) => (
    <Button
      key={i}
      className="text-black px-2 py-2 rounded-lg bg-primary/15 w-14"
    >
      {size}
    </Button>
  ));

  const reviews = [
    {
      avatar: "/girl.svg",
      name: "Jane Doe",
      rating: 5,
      description:
        "Beautiful saree, excellent quality and fast delivery! The quality is exceptional, and the craftsmanship is top-notch. The detailed weaving is truly a work of art..The quality is exceptional, and the craftsmanship is top-notch. The detailed weaving is truly a work of art.. The quality is exceptional, and the craftsmanship is top-notch. The detailed weaving is truly a work of art..The quality is exceptional, and the craftsmanship is top-notch. The detailed weaving is truly a work of art.. ",
      photo: "/girl.jpg",
    },
    {
      avatar: "/girl.svg",
      name: "John Smith",
      rating: 4,
      description:
        "Nice fabric and design, but the color is slightly different.",
      photo: "/girl.jpg",
    },
  ];

  return (
    <section className="relative flex flex-col py-8 justify-center items-center container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 p-4">
          <div className="grid grid-cols-1 gap-2">
            <img
              src="/family-set.png"
              alt="Ruffle Anarkali Full"
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg"
            />
            <div className="flex gap-2">
              {["/family-set.png", "/family-set.png", "/family-set.png"].map(
                (src, i) => (
                  <img
                    key={i}
                    src={`${src}`}
                    alt="Ruffle Anarkali"
                    className="w-full h-[100px] lg:h-[200px] object-cover rounded-lg"
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Pashni Family Set
          </h2>
          <div className="flex items-center mb-4 gap-1">
            {[...Array(5)].map((_, j) => (
              <img
                key={j}
                src="/star.svg"
                alt="star"
                className="w-4 h-4 text-yellow-500"
              />
            ))}
            <p className="text-md font-medium text-gray-600 ml-4">20 reviews</p>
          </div>
          <div className="flex items-center mb-4">
            <h2 className="text-lg lg:text-xl font-medium">Rs. 999.99</h2>
            <p className="text-md font-medium text-green-600 ml-4">In Stock</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg lg:text-xl font-medium">
              Available Colors:
            </h2>
            <div className="flex gap-2 mt-2">{colors}</div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg lg:text-xl font-medium">Available Size:</h2>
            <div className="flex gap-2 mt-2">{sizes}</div>
          </div>
          <div className="flex items-center mb-4">
            <h2 className="text-lg lg:text-xl font-medium">Quantity:</h2>
            <input
              type="number"
              className="w-24 lg:w-32 h-8 border border-gray-300 rounded-md px-2 ml-4"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 gap-4 lg:gap-8">
            <Button
              variant="outline"
              className="bg-white text-black px-6 py-2 font-medium outline-none border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Wishlist
              <Heart size={20} className="ml-2" />
            </Button>
            <Button className="text-white">
              Add to Cart
              <ShoppingCart size={20} className="ml-2" />
            </Button>
          </div>
          <div className="flex flex-col mb-4 gap-2">
            <h1 className="text-lg lg:text-xl font-medium">
              Product Description:
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Embrace timeless elegance with our Elegant Ruffle Anarkali.
            </p>
            <h3 className="text-md lg:text-lg font-medium">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Material: Georgette</li>
              <li>Style: Anarkali</li>
              <li>Neck: Round Neck</li>
              <li>Sleeve: Full Sleeve</li>
              <li>Length: Floor Length</li>
              <li>Occasion: Festive, Wedding, Party</li>
              <li>Wash Care: Dry Clean</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-lg lg:text-2xl font-semibold">Customer Reviews:</h2>
        {reviews.map((review, i) => (
          <div key={i} className="flex  flex-row gap-4">
            <div className="flex-shrink-0">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <h3 className="text-md lg:text-lg font-semibold">
                {review.name}
              </h3>
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, j) => (
                  <img
                    key={j}
                    src="/star.svg"
                    alt="star"
                    className="w-4 h-4 text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-2 text-justify">
                {review.description}
              </p>
              <img
                src={review.photo}
                alt={`Review by ${review.name}`}
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden py-20 container">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Related Products
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full mx-auto rounded-lg  transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 relative group"
            >
              <div className="absolute top-2 right-2  text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShoppingCart size={30} />
              </div>
              <img
                src="/bestselling/sari1.svg"
                alt="product"
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-medium text-gray-900">
                  Traditional Style Saree
                </h2>
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      <span>Rs. 999.99</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="line-through text-gray-500 mr-2">
                        Rs. 1299.99
                      </span>
                      {calculateDiscountPercentage(1299.99, 999.99)}% off
                    </div>
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
