import React from "react";
import { Select } from "../Select/Select";
import cn from "classnames";
const companyOptions = [
  { value: "noorsooteater", label: "Noorsooteater" },
  { value: "noorsooteater1", label: "Noorsooteater" },
  { value: "noorsooteater2", label: "Noorsooteater" },
];

export const CompanySelect: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Select
      defaultValue={companyOptions[0].value}
      variant="ghost"
      options={companyOptions}
      className={cn("font-bold h-[1.625rem]", className)}
    />
  );
};
