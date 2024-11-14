import React from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "../Button/Button";
import { Cross } from "../../icons";
import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "focus-outline border border-primary-100 bg-white rounded px-3 py-2 h-10 text-sm",
  {
    variants: {
      splitRight: {
        true: "!rounded-e-none",
      },
    },
    defaultVariants: {
      splitRight: false,
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  className?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  clearable = false,
  onClear,
  splitRight,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={cn(inputVariants({ splitRight }), className)}
        {...props}
      />
      {/* {clearable && onClear && props.value ? ( */}
      <Button
        className="absolute right-0 top-0"
        variant="transparent"
        iconOnly={true}
        // onClick={() => onClear()}
        aria-label="Clear input"
      >
        <span className="flex items-center justify-center size-full">
          <Cross />
        </span>
      </Button>
      {/* ) : null} */}
    </div>
  );
};
