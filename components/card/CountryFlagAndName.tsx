// import { findLocation } from "@/utils/countries";
import { FaLocationDot } from "react-icons/fa6";

function CountryFlagAndName({ country }: { country: string }) {
  // const validCountry = findLocation(country);
  // const countryName =
  //   validCountry!.name.length > 20
  //     ? `${validCountry!.name.substring(0, 20)}...`
  //     : validCountry!.name;
  return (
    <span className="flex  items-center gap-2 text-sm ">
      <FaLocationDot /> {country}
    </span>
  );
}
export default CountryFlagAndName;
