import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";
import { log } from "console";

const name = Prisma.PropertyScalarFieldEnum.discount;
console.log(name);

// const name = 'discount';
type FormInputNumberProps = {
  defaultValue?: number;
};

function DiscountInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="discount" className="capitalize">
        Discount ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
export default DiscountInput;
