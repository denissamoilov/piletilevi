import React from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "../Button/Button";
import { Cross } from "../../icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  onClear?: () => void;
  appendIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, clearable = false, onClear, appendIcon, value, ...props },
    ref
  ) => {
    const clearableCondition = clearable && onClear && value !== "";

    return (
      <div className="flex items-center relative">
        <input
          className={cn(
            "focus-outline border border-primary-100 bg-white rounded px-3 py-2 h-10 text-sm",
            appendIcon && "pr-10",
            clearableCondition && "pr-10",
            clearableCondition && appendIcon && "pr-12",
            className
          )}
          value={value as string}
          ref={ref}
          {...props}
        />
        {clearableCondition ? (
          <Button
            className={cn("absolute right-1 top-1", appendIcon && "right-11")}
            variant="transparent"
            iconOnly={true}
            onClick={() => onClear()}
            aria-label="Clear input"
            size="sm"
            type="button"
          >
            <span className="flex items-center justify-center size-full">
              <Cross />
            </span>
          </Button>
        ) : null}
        {appendIcon && (
          <div className="absolute right-0 top-0 size-10 flex items-center justify-center border-l border-primary-100 text-text-muted">
            {appendIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
