"use client";

import { DiscountsProvider, DiscountsFilters } from "@/features/Discounts";
import { Button } from "@/shared/ui/components";

export default function DiscountPage() {
  return (
    <DiscountsProvider>
      <div className="flex items-start justify-between">
        <h1>Discounts</h1>
        <Button>Create new discount</Button>
      </div>
      <DiscountsFilters />
    </DiscountsProvider>
  );
}
