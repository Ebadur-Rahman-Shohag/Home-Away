"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SubmitButton } from "../form/Buttons";
import { useState } from "react";
import { useProperty } from "@/utils/store"; // Assuming this is your Zustand store

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  amount: number;
};

function BookingAmount() {
  const [value, setValue] = useState<number | undefined>();

  // Get the setter function from your Zustand store
  const setProperty = useProperty((state) => state.setProperty); // Adjust according to your Zustand store structure

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value !== undefined && value > 0) {
      setProperty(value); // Update the Zustand store with the form value
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="amount" className="capitalize">
          Amount
        </Label>
        <Input
          //   defaultValue="0"
          type="number"
          name="amount"
          value={value} // Controlled input
          onChange={handleChange} // Handle input changes
          placeholder="Enter Product Amount"
        />
        <SubmitButton className="w-full mt-2" text="Add the item" />
      </form>
    </div>
  );
}

export default BookingAmount;
