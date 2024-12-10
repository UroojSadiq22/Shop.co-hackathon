"use client"
import { useState } from "react";
import TopPagepath from "../top-pagepath";
import Image from "next/image";
import ImagesLayout from "./imageslayout";

export default function Mens() {
   
  return (
    <main className="md:pt-28 pt-28 md:px-8 px-4 flex flex-col">
      <div>
        <TopPagepath />
      </div>

      <ImagesLayout/>


      <div>tab reviews</div>

      <div>you might also like</div>
    </main>
  );
}
