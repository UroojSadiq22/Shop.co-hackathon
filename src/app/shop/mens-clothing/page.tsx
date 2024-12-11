"use client"

import Section3 from "@/components/herosections/section3";
import TopPagepath from "../top-pagepath";

import ImagesLayout from "./imageslayout";
import Reviews from "./reviews";

export default function Mens() {
   
  return (
    <main className="md:pt-28 pt-28 md:px-12 px-4 flex flex-col ">
      <div>
        <TopPagepath />
      </div>

      <ImagesLayout/>


      <div className="flex flex-col items-center"><Reviews/></div>

      <div><Section3/></div>
    </main>
  );
}
