import React from "react";
import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

export default function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuTent className="h-6 w-6" />
      </Link>
    </Button>
  );
}
