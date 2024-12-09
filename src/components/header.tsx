"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignJustify, CircleUserRound, ShoppingCart, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Searchbar from "./searchbar";
import { useState } from "react";


export default function Header(){
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
  };

    const navLinks = [
        { name: "Shop", path: "/" },
        { name: "On Sale", path: "/contact" },
        { name: "New Arrivals", path: "/about" },
        { name: "Brands", path: "/signup" }
      ];
    
      const pathname = usePathname(); 
    return(
        <header className="border-b-2 fixed top-0 left-0 right-0 z-50 bg-white">
           {   isVisible && (
      <section className="bg-black text-white flex md:justify-around items-center">
        <div></div>
          <h1 className="md:text-base text-xs md:m-0 m-2">
            Sign up and get 20% off to your first order. <span className="underline cursor-pointer">Sign Up Now</span>
          </h1>
        
        <button className="lg:block hidden" onClick={handleClose}>
          <X />
        </button>
      </section>
    )}

            <nav className="p-3 flex md:justify-around justify-between items-center">
    {/* Mobile Navigation */}
    <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify />
          </SheetTrigger>

          <SheetContent side="left" className="p-8 pt-10 bg-gray-600 h-full flex flex-col">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.path}
                  className={`text-xl font-bold ${
                    pathname === link.path
                      ? "text-gray-400"
                      : "hover:text-gray-400"
                  } transition-all duration-300`}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  <h1>{link.name}</h1>
                  <hr className="my-2" />
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>
   
      <div className="text-3xl font-bold">
       <h1>SHOP.CO</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-around items-center space-x-6">
        {navLinks.map((link) => (
          <ul key={link.name}>
            <li>
              <Link
                href={link.path}
                className="p-1 transition duration-300 ease-in-out relative group"
                aria-current={pathname === link.path ? "page" : undefined}
              >
                <span
                  className={`${
                    pathname === link.path
                      ? "font-bold"
                      : "hover:text-[#DB4444]"
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out ${
                    pathname === link.path
                      ? "w-full bg-black"
                      : "w-0 bg-transparent group-hover:w-full group-hover:bg-black"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        ))}
      </div>

     

      <div className="flex justify-center items-center gap-4">
      <Searchbar />
      <ShoppingCart />
      <CircleUserRound />
      </div>
      
    </nav>
        </header>
    )
}