import { calculateTotals } from "@/utils/calculateTotals";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useProperty } from "@/utils/store";
import { formatCurrency } from "@/utils/format";
function BookingForm() {
  const { amount, price,discount } = useProperty((state) => state);

  const { subTotal, shippingCost, deliverCost, tax, orderTotal } = calculateTotals({
    amount,
    price,
    discount
  });
  return (
    <Card className="p-8 mb-4">
      <CardTitle className="mb-8">Summary </CardTitle>
      <FormRow label={`$${price-discount} x ${amount} items`} amount={subTotal} />
      <FormRow label="Shipping Cost" amount={shippingCost} />
      <FormRow label="Delivery Cost" amount={deliverCost} />
      <FormRow label="Tax" amount={tax} />
      <Separator className="mt-4" />
      <CardTitle className="mt-8">
        <FormRow label="Booking Total" amount={orderTotal} />
      </CardTitle>
    </Card>
  );
}

function FormRow({ label, amount }: { label: string; amount: number }) {
  return (
    <p className="flex justify-between text-sm mb-2">
      <span>{label}</span>
      <span>{formatCurrency(amount)}</span>
    </p>
  );
}

export default BookingForm;
