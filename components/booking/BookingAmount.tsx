"use client";
import { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SubmitButton } from "../form/Buttons";
import { useProperty } from "@/utils/store"; // Assuming this is your Zustand store

function BookingAmount() {
  const [value, setValue] = useState<number | undefined>(0); // Initialize value with 0
  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  // Get the setter function from your Zustand store
  const setProperty = useProperty((state) => state.setProperty);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true); // Mark as submitted when the form is submitted
  };

  // Update Zustand store when form is submitted and value is valid
  useEffect(() => {
    if (submitted && value !== undefined && value > 0) {
      setProperty(value); // Update Zustand store with the form value
      setSubmitted(false); // Reset the submission flag after the update
    }
  }, [submitted, value, setProperty]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value)); // Update value as the input changes
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="amount" className="capitalize">
          Amount
        </Label>
        <Input
          defaultValue="0"
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
