import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Section1 from "./herosections/section1";
import Section2 from "./herosections/section2";
import Section3 from "./herosections/section3";
import Section4 from "./herosections/section4";
import Section5 from "./herosections/section5";

export default function Hero() {
  return (
    <>
      <section className="w-full h-full">
        <div className="relative border-l-2">
          <Image
            src="/homecoverimg.png"
            alt="cover"
            width={500}
            height={160}
            className="w-full "
          />
          <div className="absolute top-[15%] left-[10%] w-[30%] flex flex-col gap-6 p-4">
            <h1 className=" font-bold text-4xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individulity and cater toyour sense of
              style
            </p>
            <Button
              variant="outline"
              className="w-full relative overflow-hidden group bg-black transition-all duration-300 ease-in-out px-4 py-2 rounded-3xl text-white"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 font-bold flex items-center gap-2">
                Shop Now
              </h1>
            </Button>
          </div>
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
