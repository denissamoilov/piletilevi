import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { Discount } from "../types/types";
import { PAGE_ITEMS } from "../constants/constants";
interface DiscountsContextType {
  discounts: Discount[];
  fetchDiscounts: () => void;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  totalPages: number;
  currentPage: number;
  onPageChangeHandler: (page: number) => void;
}

const fetchDiscounts = async () => {
  const response = await fetch(`/api/discounts`);

  if (!response.ok) {
    throw new Error("Failed to fetch discounts");
  }
  return response.json();
};

export const DiscountsContext = createContext<DiscountsContextType | undefined>(
  undefined
);

export const DiscountsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: discounts = [], refetch } = useQuery<Discount[]>({
    queryFn: fetchDiscounts,
    queryKey: ["discounts"],
    initialData: [],
  });

  const slicedDiscounts = discounts.slice(
    (currentPage - 1) * PAGE_ITEMS,
    currentPage * PAGE_ITEMS
  );

  const totalPages = Math.ceil(discounts.length / PAGE_ITEMS);

  const nextPageHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onPageChangeHandler = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DiscountsContext.Provider
      value={{
        discounts: slicedDiscounts,
        fetchDiscounts: refetch,
        nextPageHandler,
        prevPageHandler,
        totalPages,
        currentPage,
        onPageChangeHandler,
      }}
    >
      {children}
    </DiscountsContext.Provider>
  );
};
