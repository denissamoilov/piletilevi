"use client";

import { Header } from "@/features/Header";
import DiscountPage from "@/pages/DiscountPage/DiscountPage";
import { DiscountsProvider } from "@/features/Discounts/context/DiscountsContext";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-0">
      <Header />

      <div className="flex flex-col grow max-w-[103.75rem] w-full mx-auto px-10 pt-[1.25rem] pb-20">
        <div className="grow flex flex-col justify-between gap-5">
          <DiscountsProvider>
            <DiscountPage />
          </DiscountsProvider>
        </div>
      </div>
    </div>
  );
}
