import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link className=" no-underline" href={href}>
        {label}
      </Link>
    </Button>
  );
};

export default BackButton;
