"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  BackButtonLabel: string;
  BackButtonHref: string;
  ShowSocial?: boolean;
}

export function CardWrapper({
  children,
  headerLabel,
  BackButtonLabel,
  BackButtonHref,
  ShowSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {ShowSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
    </Card>
  );
}
