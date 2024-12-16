import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Filters() {
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
    <div className=" ">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="filters">
          <AccordionTrigger>filters</AccordionTrigger>
          <AccordionContent>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col">
                <NavigationMenuItem className="flex flex-row">
                  <NavigationMenuTrigger className="text-left w-full">
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>by color</NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>by size</NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>price</AccordionTrigger>
          <AccordionContent>
            <div className="py-2">
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          </AccordionContent>
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
              {sizes.map((i, index) => {
                return (
                  <Button
                    key={index}
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
  );
}
