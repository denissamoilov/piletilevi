import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { Discount } from "../types/types";
interface DiscountsContextType {
  discounts: Discount[];
  fetchDiscounts: () => void;
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
  const { data: discounts = [], refetch } = useQuery({
    queryFn: fetchDiscounts,
    queryKey: ["discounts"],
  });

  return (
    <DiscountsContext.Provider value={{ discounts, fetchDiscounts: refetch }}>
      {children}
    </DiscountsContext.Provider>
  );
};
