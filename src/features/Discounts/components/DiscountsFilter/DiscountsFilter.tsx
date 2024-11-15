import { Button, Input, Select } from "@/shared/ui/components";
import { Search } from "@/shared/ui/icons";
import { useDiscounts } from "../../hooks/useDiscounts";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { DiscountsFiltersSchema } from "../../types/types";

export const DiscountsFilters = () => {
  const { filterCategories, onSubmitFiltersHandler } = useDiscounts();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<DiscountsFiltersSchema>({
    defaultValues: {
      search: "",
      category: "",
    },
  });

  const onClearHandler = useCallback(() => {
    reset({
      search: "",
      category: "",
    });
  }, [reset]);

  const onSubmit = (data: DiscountsFiltersSchema) => {
    onSubmitFiltersHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 w-full">
      <div className="flex gap-3">
        <Controller
          control={control}
          name="search"
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Discount name, code"
              className="w-[14.5rem]"
              clearable={true}
              onClear={() => field.onChange("")}
              appendIcon={<Search />}
            />
          )}
        />
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <Select
              defaultValue={value}
              options={filterCategories}
              onValueChange={onChange}
              placeholder="Applies to"
              className="w-[17.75rem]"
            />
          )}
        />
      </div>
      <Button variant="outline" disabled={isSubmitting}>
        Search
      </Button>
      <Button variant="ghost" onClick={onClearHandler}>
        Clear all
      </Button>
    </form>
  );
};
