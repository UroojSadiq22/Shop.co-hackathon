"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SimpleDropdown() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const shopDropdownLinks = [
    { name: "Men's Clothing", path: "/shop/mens-clothing" },
    { name: "Women's Clothing", path: "/shop/womens-clothing" },
    { name: "Kids Clothing", path: "/shop/kids-clothing" },
    { name: "Accessories", path: "/shop/accessories" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hover:text-[#DB4444] lg:text-base text-xl group justify-center gap-2 bg-transparent text-black flex items-center"
      >
        Shop
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        <span className="lg:block hidden absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out w-0 bg-transparent group-hover:w-full group-hover:bg-black"></span>
      </button>
      <hr className="my-2 lg:hidden" />
      {isOpen && (
        <ul className="absolute top-full mt-2 w-[170px] backdrop-blur-2xl text-black border rounded-md shadow-md">
          {shopDropdownLinks.map((option, index) => (
            <li key={index} className={"p-2 cursor-pointer hover:bg-gray-300 "}>
              <Link
                onClick={() => setIsOpen(false)}
                href={option.path}
                className="p-2 transition duration-300 ease-in-out relative group"
                aria-current={pathname === option.path ? "page" : undefined}
              >
                <span>{option.name}</span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out ${
                    pathname === option.path
                      ? "w-full bg-black"
                      : "w-0 bg-transparent group-hover:w-full group-hover:bg-black"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
