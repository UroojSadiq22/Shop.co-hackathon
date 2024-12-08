import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Customers() {
  const reviews = [
    {
      id: 0,
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 5.0,
    },
    {
      id: 0,
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 5.0,
    },
    {
      id: 0,
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5.0,
    },
  ];

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);

    const stars = [
      ...Array(filledStars).fill("⭐️"), // Filled stars
    ];

    return stars.join(" ");
  };
  return (
    <section className="p-6 flex flex-col gap-10">
      <div className="flex md:justify-around justify-center items-center md:gap-40">
        <h1 className="font-bold md:text-4xl text-3xl my-6">OUR HAPPY CUSTOMERS</h1>
        <div className="flex md:gap-6 gap-2">
          <ArrowLeft className="cursor-pointer" />
          <ArrowRight />
        </div>
      </div>

      <div className="md:flex md:flex-row justify-center grid grid-cols-2 lg:gap-6 gap-10">
        {reviews.map((i, index) => (
          <div key={index} className="w-[22rem] border-2 rounded-lg p-6">
            <p className="text-xs">{renderStars(i.rating)}</p>
            <h1 className="font-bold text-lg my-2">
              {i.name} <span className="text-sm">✅</span>
            </h1>

            <p className="text-xs text-gray-400">{i.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
