import { Button, Input } from "@/shared/ui/components";
import { Search } from "@/shared/ui/icons";
import { useDiscounts } from "../../hooks/useDiscounts";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { DiscountsFiltersSchema } from "../../types/types";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";

export const DiscountsFilters = () => {
  const { filterCategories, onSubmitFiltersHandler, isFetching } =
    useDiscounts();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<DiscountsFiltersSchema>({
    defaultValues: {
      search: "",
      categories: [],
    },
  });

  const onClearHandler = useCallback(() => {
    reset({
      search: "",
      categories: [],
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
              disabled={isFetching}
            />
          )}
        />
        <Controller
          control={control}
          name="categories"
          render={({ field: { onChange, value } }) => (
            <CategoryDropdown
              categories={filterCategories}
              value={value}
              onChange={onChange}
              className="w-[17.75rem]"
              // disabled={isFetching}
            />
          )}
        />
      </div>
      <Button variant="outline" disabled={isSubmitting || isFetching}>
        Search
      </Button>
      <Button
        variant="ghost"
        onClick={onClearHandler}
        disabled={isFetching || isSubmitting}
      >
        Clear all
      </Button>
    </form>
  );
};
