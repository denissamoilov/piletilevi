import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { Discount } from "../types/types";
import { PAGE_ITEMS } from "../constants/constants";
import { OptionType } from "@/shared/types/types";
interface DiscountsContextType {
  discounts: Discount[];
  fetchDiscounts: () => void;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  totalPages: number;
  currentPage: number;
  onPageChangeHandler: (page: number) => void;
  searchDiscountsHandler: (search: string) => Discount[];
  filterDiscountsHandler: (filters: string[]) => Discount[];
  filterCategories: OptionType[];
}

const fetchDiscounts = async () => {
  const response = await fetch(`/api/discounts`);

  if (!response.ok) {
    throw new Error("Failed to fetch discounts");
  }
  return response.json();
};

const sliceDiscounts = (discounts: Discount[], currentPage: number) => {
  return discounts.slice(
    (currentPage - 1) * PAGE_ITEMS,
    currentPage * PAGE_ITEMS
  );
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

  // Search
  const searchDiscountsHandler = (search: string) => {
    const filteredDiscounts = discounts.filter((discount) =>
      discount.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("filteredDiscounts ::", filteredDiscounts);
    return filteredDiscounts;
  };

  // Filter
  const filterCategories = discounts.reduce((acc: OptionType[], discount) => {
    if (!acc.find((category) => category.value === discount.category)) {
      acc.push({ label: discount.category, value: discount.category });
    }
    return acc;
  }, []);

  const filterDiscountsHandler = (filters: string[]) => {
    const filteredDiscounts = discounts.filter((discount) =>
      filters.includes(discount.category)
    );
    return filteredDiscounts;
  };

  // Pagination
  const slicedDiscounts = sliceDiscounts(discounts, currentPage);

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
        searchDiscountsHandler,
        filterDiscountsHandler,
        filterCategories,
      }}
    >
      {children}
    </DiscountsContext.Provider>
  );
};
