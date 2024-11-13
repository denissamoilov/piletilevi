import { useContext } from "react";
import { DiscountsContext } from "../context/DiscountsContext";

export const useDiscounts = () => {
  const context = useContext(DiscountsContext);
  if (!context) {
    throw new Error("useDiscounts must be used within an DiscountsContext");
  }
  return context;
};
