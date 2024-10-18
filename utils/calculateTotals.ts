type BookingDetails = {
  amount: number;
  price: number;
  discount: number;
};

export const calculateTotals = ({
  amount,
  price,
  discount,
}: BookingDetails) => {
  const subTotal = amount * price - discount;
  const shippingCost = 21;
  const deliverCost = 40;
  const tax = subTotal * 0.1;
  const orderTotal =
    subTotal + shippingCost + deliverCost + tax - Number(discount);
  return { subTotal, shippingCost, deliverCost, tax, orderTotal };
};
