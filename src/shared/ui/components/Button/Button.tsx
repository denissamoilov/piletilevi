import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("px-4 py-2 rounded focus:outline-none focus:ring-2", {
  variants: {
    variant: {
      primary:
        "bg-primary text-white hover:bg-primary-light focus:ring-primary",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary-light hover:text-white",
      ghost:
        "bg-transparent text-primary hover:bg-primary-light hover:text-white",
    },
    size: {
      medium: "text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  asChild?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  asChild,
  variant,
  size,
  onClick,
}) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component onClick={onClick} className={buttonStyles({ variant, size })}>
      {children}
    </Component>
  );
};

export default Button;
