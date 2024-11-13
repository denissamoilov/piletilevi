import { createContext } from "react";

export const DiscountsContext = createContext({});

export const DiscountsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DiscountsContext.Provider value={{}}>{children}</DiscountsContext.Provider>
  );
};
