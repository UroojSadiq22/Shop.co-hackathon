"use client"
import TopPagepath from "../top-pagepath";

import ImagesLayout from "./imageslayout";
import Reviews from "./reviews";
import RelatedProducts from "./relatedproducts";

export default function Mens() {
  const paths = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "" },
    { label: "Men", href: "" },
    { label: "T-shirts" },
  ];
  return (
    <main className="md:pt-28 pt-28 md:px-12 px-4 flex flex-col ">
      <div>
        <TopPagepath items={paths}/>
      </div>

      <ImagesLayout/>


      <div className="flex flex-col items-center"><Reviews/></div>

      <div><RelatedProducts/></div>
    </main>
  );
}
