"use client";

import { useProperty } from "@/utils/store";
import BookingContainer from "./BookingContainer";
import { useEffect } from "react";
import BookingAmount from "./BookingAmount";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
};
export default function BookingWrapper({
  propertyId,
  price,
}: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,

    });
  }, []);
  return (
    <>
      <BookingAmount />
      <BookingContainer />
    </>
  );
}
