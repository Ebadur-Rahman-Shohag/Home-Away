"use client";

import { useProperty } from "@/utils/store";
import BookingContainer from "./BookingContainer";
import { useEffect, useState } from "react";
import BookingAmount from "./BookingAmount";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  discount: number;
};
export default function BookingWrapper({
  propertyId,
  price,
  discount,
}: BookingWrapperProps) {
  // const [dataFromChild, setDataFromChild] = useState<boolean>(true);

  // const handleDataFromChild = (data: boolean) => {
  //   setDataFromChild(data);
  // };

  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      discount,
    });
  }, [discount,price,propertyId]);
  return (
    <>
      <BookingAmount />
      <BookingContainer />
    </>
  );
}
