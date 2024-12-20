import Image from "next/image";
import TopPagepath from "../shop/top-pagepath";
import { Tag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const paths = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];
  const topsellings = [
    {
        id: 0,
        src: "/casual1.png",
        alt: "Gradient Graphic T-shirt",
        title: "Gradient Graphic T-shirt",
        rating: 3.5,
        originalPrice: 145,
        size:"Large",
        color:"White"
      },
      {
        id: 4,
        src: "/arrival3.png",
        alt: "Checkered Shirt",
        title: "Checkered Shirt",
        rating: 4.5,
        originalPrice: 180,
         size:"Medium",
        color:"Red"
      },
      {
        id: 3,
        src: "/arrival2.png",
        alt: "Skinny Fit Jeans",
        title: "Skinny Fit Jeans",
        rating: 3.5,
        originalPrice: 260,
        discount: 20,
         size:"Large",
        color:"Blue"
      },
  ];
  return (
    <main className="md:pt-28 pt-28 md:px-12 px-4 mb-14 flex flex-col ">
      <TopPagepath items={paths} />

      <h1 className="font-integral font-extrabold text-4xl md:my-4 my-2">Your Cart</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-4">
        <div className="border-2 rounded-lg">
          <div className="flex flex-col md:gap-2 md:flex-wrap md:justify-center">
            {topsellings.map((product, index) => (
              <div key={index} className="flex bg-white md:p-4 p-2 rounded-lg md:justify-between">
                <div className="flex gap-2">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={100}
                    height={100}
                  />
                  <div>
                    <h1 className="font-bold text-lg truncate w-full max-w-[130px] sm:max-w-[200px]">{product.title}</h1>
                    <p className="text-sm">Size: <span className="text-gray-500">{product.size}</span>
                    </p><p className="text-sm">Color: <span className="text-gray-500">{product.color}</span>
                    </p>
                    <p className="font-bold text-xl mt-2">${product.originalPrice}
                </p>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Trash2 color="#ff0000" />
                  <Button
                    variant="outline"
                    className=" relative overflow-hidden group transition-all duration-300 ease-in-out md:px-10 px-4 md:py-2 py-0 rounded-3xl text-black bg-gray-200 hover:text-white"
                  >
                    <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                    <h1 className="relative z-10 flex items-center md:gap-8 gap-4">
                      <p className="font-bold text-xl">-</p>
                      <p className="text-sm">1</p>
                      <p className="font-bold text-xl">+</p>
                    </h1>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:mx-4 p-6 border-2 rounded-lg">
          <h1 className="font-bold text-lg mb-4">Order Summary</h1>
          <div className="flex justify-between">
            <h1>Subtotal</h1>
            <h1>price</h1>
          </div>

          <div className="flex justify-between">
            <h1>Subtotal</h1>
            <h1>price</h1>
          </div>

          <div className="flex justify-between border-b-2 pb-4">
            <h1>Subtotal</h1>
            <h1>price</h1>
          </div>

          <div className="flex justify-between pt-4">
            <h1>Subtotal</h1>
            <h1>price</h1>
          </div>

          <div className="flex md:gap-4 gap-2 py-4">
        
          <div className="md:w-[25rem] flex justify-start items-center px-4 md:bg-gray-200 text-black rounded-3xl">
      <Tag size={20} className="md:opacity-50 cursor-pointer" />
      <input
          placeholder="Search for products..."
          className="hidden md:block bg-gray-200 w-full p-2 focus-within:outline-none"
        />
       
      </div>
        
      <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out md:px-10 px-6 py-2 rounded-3xl text-black bg-gray-200 hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center md:gap-8 gap-4">
          Apply
        </h1>
      </Button>
      </div>
      <Button
        variant="outline"
        className="relative w-full overflow-hidden group transition-all duration-300 ease-in-out px-6 py-2 rounded-3xl text-black bg-gray-200 hover:text-white"
      >
        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 flex items-center gap-2">
          Go to Checkout
        </h1>
      </Button>
        </div>
      </div>
    </main>
  );
}
