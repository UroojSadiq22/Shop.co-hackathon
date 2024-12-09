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
            price: 260,
            discount: 20,
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
            price: 160,
            discount: 30,
        }
    ]

     // Function to calculate the discounted price
   const getDiscountedPrice = (originalPrice: number, discount: number) => {
    return (originalPrice * (1 - discount / 100)).toFixed(2);
  };

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
        <section className="md:p-6 flex flex-col justify-center items-center gap-10 border-b-2">
            <h1 className="font-bold text-4xl my-6">NEW ARRIVALS</h1>

            <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex md:gap-2 md:flex-wrap md:justify-center">
          {arrivals.map((product, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[75%] sm:min-w-[30%] md:min-w-[10%] bg-white p-4 rounded-lg"
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={210}
                height={220}
              />
              <h1 className="font-bold text-sm mt-2">{product.title}</h1>
              <div className="flex items-center gap-5 my-1">
                <p className="text-xs">{renderStars(product.rating)}</p>
                <p className="text-xs">
                  {product.rating} <span className="text-gray-400">/5</span>
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-2">
                {/* Discounted price */}
                {product.discount ? (
                  <>
                    <p className="font-bold text-lg">
                      ${getDiscountedPrice(product.price, product.discount)}
                    </p>
                    <p className="text-lg font-bold line-through text-gray-400">
                      ${product.price}
                    </p>
                    <p className="text-[10px] font-bold text-red-800 bg-red-200 rounded-full p-0.5 px-3">
                      -{product.discount}%
                    </p>
                  </>
                ) : (
                  <p className="font-bold text-lg">${product.price}</p>
                )}
              
              </div>
            </div>
          ))}
        </div>
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
      
        
      </section>
    )
}