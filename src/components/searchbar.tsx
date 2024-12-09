"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Searchbar() {
  return (
    <>
      <div className="md:w-[25rem] flex justify-start items-center px-2 md:bg-gray-200 text-black rounded-3xl">
      <Search size={20} className="md:opacity-50 cursor-pointer" />
      <input
          placeholder="Search for products..."
          className="hidden md:block bg-gray-200 p-2 focus-within:outline-none"
        />
       
      </div>
    </>
  );
}
