import { formatQuantity } from "@/utils/format";

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

function PropertyDetails({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) {
  return (
    <p className="text-md font-light space-x-4 ">
      <span>{formatQuantity(bedrooms, "bedroom")} </span>
      <span>{formatQuantity(baths, "bath")} </span>
      <span>{formatQuantity(guests, "guest")} </span>
      <span>{formatQuantity(beds, "bed")}</span>
    </p>
  );
}
export default PropertyDetails;