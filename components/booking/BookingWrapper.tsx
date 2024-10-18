"use client";

import { useProperty } from "@/utils/store";
import BookingContainer from "./BookingContainer";
import { useEffect } from "react";
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
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      discount,
    });
  }, []);
  return (
    <>
      <BookingAmount />
      <BookingContainer />
    </>
  );
}
