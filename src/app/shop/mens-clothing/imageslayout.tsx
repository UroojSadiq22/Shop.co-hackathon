"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { describe } from "node:test";
import { useState } from "react";

export default function ImagesLayout() {
 
  const tshirts = [
    {
      id: 0,
      src: "/tshirtfront.png",
      alt: "tshirtfront",
      title: "ONE LIFE GRAPHIC T-SHIRT",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style",
      rating: 4.5,
      originalPrice: 300,
      discount: 40,
    },
    {
      id: 1,
      src: "/tshirtback.png",
      alt: "tshirtback",
    },
    {
      id: 2,
      src: "/tshirtwear.png",
      alt: "tshirtwear",
    },
  ];

   const [selectedImage, setSelectedImage] = useState<string>(tshirts[0]?.src);

  const getDiscountedPrice = (originalPrice: number, discount: number) => {
    return (originalPrice * (1 - discount / 100)).toFixed(2);
  };

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    const stars = [
      ...Array(filledStars).fill("⭐️"), // Filled stars
      ...Array(halfStar).fill("☆"),
    ];

    return stars.join(" ");
  };
  return (
    <main className="flex lg:flex-row flex-col mt-4">
      <div className="grid md:grid-cols-[1fr,3fr] grid-cols-1 gap-4 mb-4">
        {/* Column of Images */}
        <div className="flex md:flex-col items-center gap-2  order-2 md:order-none">
          {tshirts.map((i, index) => (
            <div
              key={index}
              className={`rounded-xl cursor-pointer ${
                selectedImage === i.src ? "border-4 border-black" : ""
              }`}
              onClick={() => setSelectedImage(i.src)}
            >
              <Image
                src={i.src}
                alt={i.alt}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Large Div */}
        <div className="md:row-span-3 border order-1 md:order-none bg-gray-100 rounded-lg flex items-center justify-center">
        
            <Image
              src={selectedImage}
              alt="Selected T-shirt"
              width={300}
              height={400}
              className="rounded-md"
            />
        
        </div>
      </div>

      <div className="md:px-6">
        <div className="flex flex-col gap-2 border-b-2 pb-4">
          {/* Discounted price */}
          {tshirts[0].discount &&
          tshirts[0].title &&
          tshirts[0].originalPrice &&
          tshirts[0].rating ? (
            <>
              <h1 className="font-bold md:text-3xl text-2xl">{tshirts[0].title}</h1>
              <div className="flex items-center gap-5">
                <p className="text-xs">{renderStars(tshirts[0].rating)}</p>
                <p className="text-xs">
                  {tshirts[0].rating} <span className="text-gray-400">/5</span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-bold text-xl">
                  $
                  {getDiscountedPrice(
                    tshirts[0].originalPrice,
                    tshirts[0].discount
                  )}
                </p>
                <p className="text-xl font-bold line-through text-gray-400">
                  ${tshirts[0].originalPrice}
                </p>
                <p className="text-xs font-bold text-red-800 bg-red-200 rounded-full p-0.5 px-3">
                  -{tshirts[0].discount}%
                </p>
              </div>
              <p className="md:text-sm text-xs text-gray-400">{tshirts[0].description}</p>
            </>
          ) : (
            <p></p>
          )}
        </div>
        <h1 className="text-base my-2">Select Colors</h1>
        <div className="flex gap-4 border-b-2 pb-4">
          <div className="w-10 h-10 bg-green-500 rounded-full"></div>
          <div className="w-10 h-10 bg-green-900 rounded-full"></div>
          <div className="w-10 h-10 bg-blue-900 rounded-full"></div>
        </div>

        <h1 className="text-base my-2">Choose Size</h1>
        <div className="flex md:gap-4 gap-2 border-b-2 pb-4">
        <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200  hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          Small
        </h1>
      </Button>
      <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200  hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          Medium
        </h1>
      </Button>
      <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200  hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          Large
        </h1>
      </Button>
      <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200 hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          X-Large
        </h1>
      </Button>
        </div>

        <div className="flex md:gap-4 gap-2 pt-4">
        <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out md:px-10 px-6 py-2 rounded-3xl text-black bg-gray-200 hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center md:gap-8 gap-4">
          <p className="font-bold text-xl">-</p>
          <p className="text-sm">1</p>
          <p className="font-bold text-xl">+</p>
        </h1>
      </Button>
          <Button
        variant="outline"
        className="relative w-full overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200 hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          Add to Cart
        </h1>
      </Button>
        </div>
      </div>
    </main>
  );
}
