"use client";

import {
  DiscountsFilters,
  DiscountsTable,
  DiscountsPagination,
  DiscountsTabs,
  useDiscounts,
  CreateDiscountDialog,
} from "@/features/Discounts";

export default function DiscountPage() {
  const { totalPages } = useDiscounts();

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h1>Discounts</h1>
          <CreateDiscountDialog />
        </div>
        <DiscountsFilters />
      </div>

      <DiscountsTabs />

      <div className="flex-1 w-full">
        <div className="shadow-lg rounded bg-white border border-primary-50 p-5">
          <DiscountsTable />
        </div>
      </div>

      {totalPages > 1 && (
        <div className="shrink-0 flex justify-center items-end mt-4">
          <DiscountsPagination />
        </div>
      )}
    </>
  );
}
