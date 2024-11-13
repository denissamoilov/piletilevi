import { Header } from "@/features/Header";
import DiscountPage from "@/pages/DiscountPage/DiscountPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-0">
      <Header />

      <div className="grow max-w-[103.75rem] w-full mx-auto px-10 pt-[1.25rem]">
        <div className="flex flex-col gap-3">
          <DiscountPage />
        </div>
      </div>
    </div>
  );
}
