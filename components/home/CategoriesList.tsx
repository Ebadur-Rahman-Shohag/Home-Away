import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PriceSearch from "./PriceSearch";
import Link from "next/link";

function CategoriesList({
  category,
  search,
  price
}: {
  category?: string;
  search?: string;
  price?: number;
}) {
  const searchTerm = search ? `&search=${search}` : "";
  const priceTerm = price ? `&price=${price}` : "";
  return (
    <section>
      <ScrollArea className="py-6">
        <div className="flex gap-x-4">
          {categories.map((item) => {
            const isActive = item.label === category;
            return (
              <Link
                key={item.label}
                href={`/?category=${item.label}${searchTerm}${priceTerm}`}
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  <item.icon className="w-8 h-8 " />
                  <p className="capitalize text-sm mt-1">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        {/* <PriceSearch /> */}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
   
    </section>
  );
}
export default CategoriesList;
