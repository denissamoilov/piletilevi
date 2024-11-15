import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "../../icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const selectStyles = cva(
  "focus-outline inline-flex items-center justify-between gap-2 text-sm",
  {
    variants: {
      variant: {
        outline:
          "bg-white rounded ring-1 ring-inset ring-primary-100 text-primary gap-2 px-4 py-3 text-sm",
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
    placeholder?: string;
  };

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ variant, options, className, placeholder, ...props }, ref) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          className={cn(selectStyles({ variant }), className)}
          ref={ref}
        >
          <SelectPrimitive.Value
            placeholder={placeholder}
            className="placeholder:text-text-muted"
          />
          <SelectPrimitive.Icon className="size-2.5 text-primary-500">
            <ChevronDown />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content
          position="popper"
          className="bg-white shadow-md rounded-sm z-10 mt-2 overflow-hidden w-full min-w-[10rem]"
        >
          <SelectPrimitive.Viewport>
            {options.map(({ value, label }) => (
              <SelectPrimitive.Item
                key={value}
                value={value}
                className={cn(
                  "flex items-center px-2 py-3 text-sm gap-2",
                  "hover:cursor-pointer hover:bg-neutral-100",
                  "before:rounded-sm before:size-5 before:ring-1 before:ring-inset before:ring-primary-100",
                  "data-[state=checked]:bg-primary-200 data-[state=checked]:before:hidden"
                )}
              >
                <SelectPrimitive.ItemIndicator className="bg-primary-900 size-5 text-white rounded-sm">
                  <Check />
                </SelectPrimitive.ItemIndicator>
                <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

export { Select };
