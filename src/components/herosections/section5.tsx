// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useRef } from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

// export default function Customers() {
//   const reviews = [
//     {
//       id: 0,
//       name: "Sarah M.",
//       review:
//         "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//       rating: 5.0,
//     },
//     {
//       id: 0,
//       name: "Alex K.",
//       review:
//         "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
//       rating: 5.0,
//     },
//     {
//       id: 0,
//       name: "James L.",
//       review:
//         "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
//       rating: 5.0,
//     },
//   ];

//   const renderStars = (rating: number) => {
//     const filledStars = Math.floor(rating);

//     const stars = [
//       ...Array(filledStars).fill("⭐️"), // Filled stars
//     ];

//     return stars.join(" ");
//   };

//   const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
//   return (
//     <section className="p-6 flex flex-col gap-10">
//       <div className="flex md:justify-around justify-center items-center md:gap-40">
//         <h1 className="font-bold md:text-4xl text-3xl my-6">OUR HAPPY CUSTOMERS</h1>
//         <div className="flex md:gap-6 gap-2">
//           <ArrowLeft className="cursor-pointer" />
//           <ArrowRight />
//         </div>
//       </div>

    

//       <Carousel
//             plugins={[plugin.current]}
//             className="w-full max-w-md rounded-lg shadow-2xl"
//             onMouseEnter={plugin.current.stop}
//             onMouseLeave={plugin.current.reset}
//           >
//             <CarouselContent>
//             <div className="md:flex md:flex-row justify-center grid grid-cols-2 lg:gap-6 gap-10">
//         {reviews.map((i, index) => (
//           <div key={index} className="w-[22rem] border-2 rounded-lg p-6">
//             <p className="text-xs">{renderStars(i.rating)}</p>
//             <h1 className="font-bold text-lg my-2">
//               {i.name} <span className="text-sm">✅</span>
//             </h1>

//             <p className="text-xs text-gray-400">{i.review}</p>
//           </div>
//         ))}
//       </div>
//             </CarouselContent>
            
//           </Carousel>
//     </section>
//   );
// }
"use client";

import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Customers() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 5.0,
    },
    {
      id: 3,
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5.0,
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    return Array.from({ length: filledStars }, () => "⭐️").join(" ");
  };

  return (
    <section className="p-6 flex flex-col justify-center items-center gap-10">
      <div className=" w-full flex md:justify-around justify-center items-center md:gap-40">
        <h1 className="font-bold md:text-4xl text-3xl my-6">OUR HAPPY CUSTOMERS</h1>
        <div className="flex md:gap-6 gap-2">
          <button
            className="cursor-pointer"
            onClick={() => api && api.scrollPrev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => api && api.scrollNext()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ align: "center", loop: true }}
        className="w-full max-w-md rounded-lg shadow-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="w-[22rem] rounded-lg p-10"
            >
              <p className="text-xs">{renderStars(review.rating)}</p>
              <h1 className="font-bold text-lg my-2">
                {review.name} <span className="text-sm">✅</span>
              </h1>
              <p className="text-xs text-gray-400">{review.review}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
