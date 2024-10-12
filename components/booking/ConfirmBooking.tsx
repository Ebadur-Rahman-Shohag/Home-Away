"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useProperty } from "@/utils/store";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { createBookingAction } from "@/utils/actions";

function ConfirmBooking() {
  const { userId } = useAuth();
  const { propertyId, amount } = useProperty((state) => state);

  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button type="button" className="w-full">
          Sign In to Complete Booking
        </Button>
      </SignInButton>
    );

  const createBooking = createBookingAction.bind(null, {
    propertyId,
    amount,
  });
  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton text="Reserve" className="w-full" />
      </FormContainer>
    </section>
  );
}
export default ConfirmBooking;
