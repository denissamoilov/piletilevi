import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "flex px-4 items-center text-sm font-bold uppercase rounded focus-outline transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-900 text-white hover:bg-primary-light focus:ring-primary hover:bg-primary-500",
        secondary:
          "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
        outline:
          "ring-2 ring-inset ring-primary-900 text-primary-900 bg-transparent hover:ring-primary-500 hover:text-primary-500",
        ghost:
          "bg-transparent text-text-muted hover:bg-primary-light hover:bg-primary-100 hover:text-primary-900 !px-3 normal-case",
        "icon-only": `bg-transparent !p-0 text-text-muted`,
        white:
          "bg-white border border-primary-100 text-primary-900 hover:bg-primary-light",
        transparent: "bg-transparent border-0",
        input:
          "bg-white rounded ring-1 ring-inset ring-primary-100 text-primary gap-2 px-4 py-3 text-sm font-normal normal-case",
      },
      size: {
        md: "h-10 min-w-10",
        sm: "h-8 min-w-8",
      },
      iconOnly: {
        true: "px-0 justify-center text-text-muted hover:text-text-active text-text-muted hover:text-text-active",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconOnly?: boolean;
  appendIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconOnly,
      asChild = false,
      appendIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, iconOnly, className }),
          appendIcon && "gap-2"
        )}
        ref={ref}
        {...props}
      >
        {children}
        {appendIcon && (
          <span className="flex items-center justify-center shrink-0 ml-auto">
            {appendIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
