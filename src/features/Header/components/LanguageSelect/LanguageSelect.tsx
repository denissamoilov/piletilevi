import React from "react";
import { Select } from "../../../../shared/ui/components/Select/Select";
import cn from "classnames";
const languageOptions = [
  { value: "en", label: "English" },
  { value: "et", label: "Estonian" },
  { value: "ru", label: "Russian" },
];

export const LanguageSelect: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Select
      defaultValue={languageOptions[0].value}
      variant="ghost"
      options={languageOptions}
      className={cn("h-[1.625rem]", className)}
    />
  );
};
