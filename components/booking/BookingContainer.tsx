"use client";

import { useProperty } from "@/utils/store";
import ConfirmBooking from "./ConfirmBooking";
import BookingForm from "./BookingForm";
function BookingContainer() {
  const { amount } = useProperty((state) => state);

  if (!amount) return null;

  return (
    <div className="w-full mt-8 md:mt-16">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
}

export default BookingContainer;
