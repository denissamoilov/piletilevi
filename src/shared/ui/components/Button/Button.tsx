import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
const buttonStyles = cva(
  "flex px-4 items-center text-sm font-bold rounded focus-outline transition-colors",
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
          "bg-transparent text-text-muted hover:bg-primary-light hover:bg-primary-100 hover:text-primary-900",
        "icon-only": `bg-transparent !p-0 text-text-muted`,
        white:
          "bg-white border border-primary-100 text-primary-900 hover:bg-primary-light",
        transparent: "bg-transparent border-0",
      },
      size: {
        md: "text-base h-10 min-w-10",
        sm: "text-sm h-8 min-w-8",
      },
      iconOnly: {
        true: "px-0 justify-center text-text-muted hover:text-text-active",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  asChild?: boolean;
  onClick?: () => void;
  className?: string;
  iconOnly?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild,
  variant,
  size,
  onClick,
  className,
  iconOnly,
}) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      onClick={onClick}
      className={cn(buttonStyles({ variant, size, iconOnly }), className)}
    >
      {children}
    </Component>
  );
};
