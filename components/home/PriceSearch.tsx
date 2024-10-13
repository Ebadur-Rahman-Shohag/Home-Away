"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "@/components/ui/slider";

const PriceSearch: React.FC = () => {
  const router = useRouter();
  const [rangeValue, setRangeValue] = useState<number>(50); // Default value of 50

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value[0]); // Extract the first value from the array and update the state
  };

  const handleClick = (): void => {
    // Update the URL when button is clicked
    router.push(`?price=${rangeValue}`);
  };

  return (
    <div className="flex space-x-4">
      <Label htmlFor="rangeInput">{rangeValue}</Label>
      <Slider
        id="rangeInput"
        min={0}
        max={50000}
        value={[rangeValue]} // Pass the current value as an array
        step={1}
        onValueChange={handleRangeChange} // Correctly update the state
      />
      <Button onClick={handleClick}>Filter By Price</Button>
    </div>
  );
};

export default PriceSearch;
