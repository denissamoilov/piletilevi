import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva } from "class-variance-authority";

const separatorStyles = cva("bg-primary-100 shrink-0", {
  variants: {
    direction: {
      horizontal: "h-[1px] w-full",
      vertical: "w-[1px] h-full",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

type SeparatorProps = {
  direction?: "horizontal" | "vertical";
};

export const Separator: React.FC<SeparatorProps> = ({ direction }) => {
  return (
    <SeparatorPrimitive.Root
      className={separatorStyles({ direction })}
      decorative
      orientation={direction}
    />
  );
};
