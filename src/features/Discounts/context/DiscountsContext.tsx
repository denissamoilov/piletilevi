import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { Discount, DiscountsFiltersSchema } from "../types/types";
import { PAGE_ITEMS } from "../constants/constants";

const DEFAULT_PAGE = 1;

interface DiscountsContextType {
  discounts: Discount[];
  isFetching: boolean;
  fetchDiscounts: () => void;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  totalPages: number;
  currentPage: number;
  onPageChangeHandler: (page: number) => void;
  filterCategories: string[];
  onSubmitFiltersHandler: (data: DiscountsFiltersSchema) => void;
}

const initialState: DiscountsContextType = {
  discounts: [],
  isFetching: false,
  fetchDiscounts: () => {},
  nextPageHandler: () => {},
  prevPageHandler: () => {},
  totalPages: 0,
  currentPage: 1,
  onPageChangeHandler: () => {},
  filterCategories: [],
  onSubmitFiltersHandler: () => {},
};

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

export const DiscountsContext =
  createContext<DiscountsContextType>(initialState);

export const DiscountsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const {
    data: discounts = [],
    refetch,
    isLoading,
    isFetching,
  } = useQuery<Discount[]>({
    queryFn: fetchDiscounts,
    queryKey: ["discounts"],
    initialData: [],
  });

  const [filteredDiscounts, setFilteredDiscounts] =
    useState<Discount[]>(discounts);

  useEffect(() => {
    setFilteredDiscounts(discounts);
  }, [discounts]);

  // Filter categories
  const filterCategories = discounts.reduce((acc: string[], discount) => {
    if (!acc.find((category) => category === discount.category)) {
      acc.push(discount.category);
    }
    return acc;
  }, []);

  // Filtered discounts
  const onSubmitFiltersHandler = (data: DiscountsFiltersSchema) => {
    const filteredDiscounts = discounts.filter((discount) => {
      const matchSearchInput = data.search
        ? discount.name.toLowerCase().includes(data.search.toLowerCase())
        : true;
      const matchCategoryFilter = data.categories?.length
        ? data.categories.includes(discount.category)
        : true;

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
        isFetching,
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
