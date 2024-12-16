import TopPagepath from "../shop/top-pagepath";
import CasualLayoutImages from "./casualimageslayout";

import Filters from "./filters";

export default function Casual() {
    const paths = [
        { label: "Home", href: "/" },
        { label: "Casual", href: "/onsale" },
      ];
  return (
    <main className="md:pt-28 pt-28 md:px-12 px-4 mb-14 flex flex-col ">
      <div>
        <TopPagepath items={paths}/>
      </div>

      <div className="grid grid-cols-[3fr,9fr] gap-2 mt-4 items-start">
        <div className="hidden md:block border-2 p-4 rounded-2xl">
          <Filters />
        </div>

        <CasualLayoutImages />
      </div>
    </main>
  );
}
