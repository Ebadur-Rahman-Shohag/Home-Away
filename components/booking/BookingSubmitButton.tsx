"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};


type btnSize = "default" | "lg" | "sm";
export function SubmitButton(
  { className = "", text = "submit", size = "lg" }: SubmitButtonProps
) {


  const { pending } = useFormStatus();


  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
