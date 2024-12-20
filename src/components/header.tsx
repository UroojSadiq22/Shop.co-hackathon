"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleUserRound, ShoppingCart, X } from "lucide-react";
import Searchbar from "./searchbar";
import { useState } from "react";
import Mobilenav from "./mobilenav";
import Desktopnav from "./desktopnav";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const shopDropdownLinks = [
    { name: "Men's Clothing", path: "/shop/mens-clothing" },
    { name: "Women's Clothing", path: "/shop/womens-clothing" },
    { name: "Kids Clothing", path: "/shop/kids-clothing" },
    { name: "Accessories", path: "/shop/accessories" },
  ];
  const navLinks = [
    { name: "Shop", path: "" },
    { name: "On Sale", path: "/onsale" },
    { name: "New Arrivals", path: "/newarrivals" },
    { name: "Brands", path: "/brands" },
  ];

  const pathname = usePathname();
  return (
    <header className="border-b fixed top-0 left-0 right-0 z-50 bg-white">
      {isVisible && (
        <section className="bg-black text-white flex md:justify-around items-center">
          <div></div>
          <h1 className="md:text-base text-xs md:m-0 m-2">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline cursor-pointer">Sign Up Now</span>
          </h1>

          <button className="lg:block hidden" onClick={handleClose}>
            <X />
          </button>
        </section>
      )}

      <nav className="p-3 flex md:justify-around justify-between items-center">
        <div className="flex items-center lg:gap-32 gap-2">
          {/* Mobile Navigation */}
          <Mobilenav navLinks={navLinks} pathname={pathname} />

          <div className="text-3xl font-bold">
            <Link href="/" className="cursor-pointer">
              <h1 className="font-integral font-extrabold">SHOP.CO</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
         <Desktopnav navLinks={navLinks} pathname={pathname} shopDropdownLinks={shopDropdownLinks}/>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Searchbar />
          <Link href="/cart" className="cursor-pointer">
            <ShoppingCart />
          </Link>

          <CircleUserRound />
        </div>
      </nav>
    </header>
  );
}
