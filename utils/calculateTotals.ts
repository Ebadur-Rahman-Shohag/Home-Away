type BookingDetails = {
  amount: number;
  price: number;
};

export const calculateTotals = ({ amount, price }: BookingDetails) => {
  const subTotal = amount * price;
  const cleaning = 21;
  const service = 40;
  const tax = subTotal * 0.1;
  const orderTotal = subTotal + cleaning + service + tax;
  return { subTotal, cleaning, service, tax, orderTotal };
};
