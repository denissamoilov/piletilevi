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
  searchDiscountsHandler: (search: string) => void;
  filterByCategoryHandler: (value: string) => void;
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
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const { data: discounts = [], refetch } = useQuery<Discount[]>({
    queryFn: fetchDiscounts,
    queryKey: ["discounts"],
    initialData: [],
  });

  // Filtered discounts
  const filteredDiscounts = discounts.filter((discount) => {
    const matchSearch = discount.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchCategory =
      discount.category.toLowerCase() === categoryFilter.toLowerCase();

    console.log(
      "discount.category.toLowerCase() ::",
      discount.category.toLowerCase()
    );
    console.log("matchCategory ::", categoryFilter.toLowerCase());

    return matchSearch && matchCategory;
  });

  // Search
  const searchDiscountsHandler = (search: string) => {
    setSearchInput(search);
  };

  // Filter categories
  const filterCategories = discounts.reduce((acc: OptionType[], discount) => {
    if (!acc.find((category) => category.value === discount.category)) {
      acc.push({ label: discount.category, value: discount.category });
    }
    return acc;
  }, []);

  const filterByCategoryHandler = (category: string) => {
    setCategoryFilter(category);
  };

  // Pagination
  const slicedDiscounts = sliceDiscounts(filteredDiscounts, currentPage);

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
        filterByCategoryHandler,
        filterCategories,
      }}
    >
      {children}
    </DiscountsContext.Provider>
  );
};
