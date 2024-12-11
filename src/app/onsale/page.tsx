import Section2 from "@/components/herosections/section2";
import TopPagepath from "../shop/top-pagepath";
import Section3 from "@/components/herosections/section3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Casual() {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-large",
  ];
  return (
    <main className="md:pt-28 pt-28 md:px-12 px-4 flex flex-col ">
      <div>
        <TopPagepath />
      </div>

      <div className="grid grid-cols-[3fr,9fr] mt-4">
        <div className="border-2 p-4 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="filters">
              <AccordionTrigger>filters</AccordionTrigger>
              <AccordionContent>filters</AccordionContent>
            </AccordionItem>

            <AccordionItem value="price">
              <AccordionTrigger>price</AccordionTrigger>
              <AccordionContent>price</AccordionContent>
            </AccordionItem>

            <AccordionItem value="colors">
              <AccordionTrigger>Colors</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-5 gap-2 pb-4">
                  <div className="w-8 h-8 bg-lime-400 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-red-600 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-400 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-orange-600 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-300 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-800 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-purple-700 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-600 border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-white border-2 rounded-full"></div>
                  <div className="w-8 h-8 bg-black border-2 rounded-full"></div>

                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size">
              <AccordionTrigger>size</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((i) => {
                    return (
                      <Button
                        variant="outline"
                        className="relative overflow-hidden group transition-all duration-300 ease-in-out rounded-3xl text-black md:text-base text-xs bg-gray-200  hover:text-white"
                      >
                        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                        <h1 className="relative z-10">{i}</h1>
                      </Button>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dress style">
              <AccordionTrigger>dress style</AccordionTrigger>
              <AccordionContent>dress style</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
                        variant="outline"
                        className="w-full relative overflow-hidden group transition-all duration-300 ease-in-out my-6 rounded-3xl text-black md:text-base text-xs bg-gray-200  hover:text-white"
                      >
                        <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                        <h1 className="relative z-10">Apply Filter</h1>
                      </Button>
        </div>

        <div>
          <Section2 />
          <Section3 />
        </div>
      </div>
    </main>
  );
}
