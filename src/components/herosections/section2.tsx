import Image from "next/image"
import { Button } from "../ui/button";

export default function Arrivals(){
    const arrivals=[
        {
            id:0,
            src:"/arrival1.png",
            alt:"T-shirt with Tape Details",
            title:"T-shirt with Tape Details",
            rating: 4.5,
            price: 120
        },
        {
            id:1,
            src:"/arrival2.png",
            alt:"Skinny Fit Jeans",
            title:"Skinny Fit Jeans",
            rating: 3.5,
            price: 240
        }, 
        {
            id:2,
            src:"/arrival3.png",
            alt:"Checkered Shirt",
            title:"Checkered Shirt",
            rating: 4.5,
            price: 180
        },
        {
            id:3,
            src:"/arrival4.png",
            alt:"Sleeve Striped T-shirt",
            title:"Sleeve Striped T-shirt",
            rating: 4.5,
            price: 130
        }
    ]

    const renderStars = (rating:number) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    

    const stars = [
      ...Array(filledStars).fill("⭐️"), // Filled stars
      ...Array(halfStar).fill("☆"),
    ];

    return stars.join(" ");
  };

    return(
        <section className="p-6 flex flex-col justify-center items-center gap-10">
            <h1 className="font-bold text-4xl my-6">NEW ARRIVALS</h1>

        <div className="flex flex-col items-center gap-10 border-b-2">
        <div className="md:flex md:flex-row justify-center grid grid-cols-2 lg:gap-6 gap-10 mx-6">
          {arrivals.map((i, index) => (
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
            <div
             key={index}
      
            >
              <Image
               
                src={i.src}
                alt={i.alt}
                width={210}
                height={220}
              />
              <h1 className="font-bold text-sm mt-2">{i.title}</h1>
              <div className="flex items-center gap-5 my-1">

              <p className="text-xs">{renderStars(i.rating)}</p>
              <p className="text-xs">{i.rating}<span className="text-gray-400">/5</span></p>
              </div>
            
              <p className="font-bold text-lg">${i.price}</p>
            </div>
          ))}
        </div>

        <Button
              variant="outline"
              className="mb-10 w-44 relative overflow-hidden group transition-all duration-300 ease-in-out px-14 py-2 rounded-3xl text-black"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 font-bold flex items-center gap-2">
                View All
              </h1>
            </Button>
            </div>    
        
      </section>
    )
}