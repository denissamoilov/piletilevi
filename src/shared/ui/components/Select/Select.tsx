import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "../../icons/10";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
const selectStyles = cva(
  "inline-flex items-center justify-between gap-2 focus:outline-none text-sm",
  {
    variants: {
      variant: {
        outline: "border border-primary text-primary bg-transparent gap-2",
        ghost: "bg-transparent text-primary",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

type SelectProps = VariantProps<typeof selectStyles> &
  Omit<SelectPrimitive.SelectProps, "children"> & {
    options: { value: string; label: string }[];
    className?: string;
  };

export const Select: React.FC<SelectProps> = ({
  variant,
  options,
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={cn(selectStyles({ variant }), className)}
      >
        <SelectPrimitive.Value placeholder="Select an option" />
        <SelectPrimitive.Icon className="size-2.5 text-primary-500">
          <ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content
        position="popper"
        className="bg-white shadow-lg rounded"
      >
        <SelectPrimitive.Viewport className="p-2">
          {options.map(({ value, label }) => (
            <SelectPrimitive.Item
              key={value}
              value={value}
              className="flex items-center px-4 py-2 hover:bg-gray-100"
            >
              <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};
