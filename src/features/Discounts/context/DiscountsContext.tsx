import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { Discount, DiscountsFiltersSchema } from "../types/types";
import { PAGE_ITEMS } from "../constants/constants";
import { OptionType } from "@/shared/types/types";

const DEFAULT_PAGE = 1;

interface DiscountsContextType {
  discounts: Discount[];
  fetchDiscounts: () => void;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  totalPages: number;
  currentPage: number;
  onPageChangeHandler: (page: number) => void;
  filterCategories: OptionType[];
  onSubmitFiltersHandler: (data: DiscountsFiltersSchema) => void;
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
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const { data: discounts = [], refetch } = useQuery<Discount[]>({
    queryFn: fetchDiscounts,
    queryKey: ["discounts"],
    initialData: [],
  });

  const [filteredDiscounts, setFilteredDiscounts] =
    useState<Discount[]>(discounts);

  useEffect(() => {
    setFilteredDiscounts(discounts);
  }, [discounts]);

  console.log("filteredDiscounts :: ", filteredDiscounts);

  // Filter categories
  const filterCategories = discounts.reduce((acc: OptionType[], discount) => {
    if (!acc.find((category) => category.value === discount.category)) {
      acc.push({ label: discount.category, value: discount.category });
    }
    return acc;
  }, []);

  // Filtered discounts
  const onSubmitFiltersHandler = (data: DiscountsFiltersSchema) => {
    console.log("data :: ", data);

    const filteredDiscounts = discounts.filter((discount) => {
      const matchSearchInput = data.search
        ? discount.name.toLowerCase().includes(data.search.toLowerCase())
        : true; // If no search input, consider it a match

      const matchCategoryFilter = data.category
        ? discount.category.toLowerCase() === data.category.toLowerCase()
        : true; // If no category selected, consider it a match

      return matchSearchInput && matchCategoryFilter;
    });

    setFilteredDiscounts(filteredDiscounts);
  };

  // Pagination
  const slicedDiscounts = sliceDiscounts(filteredDiscounts, currentPage);

  const totalPages = Math.ceil(filteredDiscounts.length / PAGE_ITEMS);

  const nextPageHandler = () => {
    setCurrentPage((prev) => (prev !== totalPages ? prev + 1 : prev));
  };

  const prevPageHandler = () => {
    setCurrentPage((prev) => (prev !== 1 ? prev - 1 : prev));
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
        filterCategories,
        onSubmitFiltersHandler,
      }}
    >
      {children}
    </DiscountsContext.Provider>
  );
};
