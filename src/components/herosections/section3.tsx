import Image from "next/image";
import { Button } from "../ui/button";

export default function Topsellings() {
  const topsellings = [
    {
      id: 0,
      src: "/topselling1.png",
      alt: "T-shirt with Tape Details",
      title: "Vertical Striped Shirt",
      rating: 5.0,
      price: 212,
    },
    {
      id: 1,
      src: "/topselling2.png",
      alt: "Skinny Fit Jeans",
      title: "Courage Graphic T-shirt",
      rating: 4.0,
      price: 145,
    },
    {
      id: 2,
      src: "/topselling3.png",
      alt: "Loose Fit Bermuda Shorts",
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: 80,
    },
    {
      id: 3,
      src: "/topselling4.png",
      alt: "Faded Skinny Jeans",
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
    },
  ];

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    const stars = [
      ...Array(filledStars).fill("⭐️"), // Filled stars
      ...Array(halfStar).fill("☆"),
    ];

    return stars.join(" ");
  };

  return (
    <section className="p-6 flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-4xl my-6">TOP SELLINGS</h1>
      <div className="md:flex md:flex-row justify-center grid grid-cols-2 lg:gap-6 gap-10">
        {topsellings.map((i, index) => (
          // <motion.div
          //  key={index}
          //   initial="hidden"
          //   whileInView="visible"
          //   viewport={{ once: true, amount: 0.3 }}
          //   variants={itemVariants}
          // >
          //   <Image

          //     src={i.src}
          //     alt={i.alt}
          //     width={150}
          //     height={150}
          //   />
          // </motion.div>
          <div key={index}>
            <Image src={i.src} alt={i.alt} width={210} height={220} />
            <h1 className="font-bold text-sm mt-2">{i.title}</h1>
            <div className="flex items-center gap-5 my-2">
              <p className="text-xs">{renderStars(i.rating)}</p>
              <p className="text-xs">
                {i.rating}
                <span className="text-gray-400">/5</span>
              </p>
            </div>

            <p className="font-bold text-lg">${i.price}</p>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="relative overflow-hidden group transition-all duration-300 ease-in-out px-14 py-2 rounded-3xl text-black"
      >
        <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        <h1 className="relative z-10 font-bold flex items-center gap-2">
          View All
        </h1>
      </Button>
    </section>
  );
}
