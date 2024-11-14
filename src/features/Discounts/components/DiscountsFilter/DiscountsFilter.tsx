import { Button, Input, Select } from "@/shared/ui/components";
import { Search } from "@/shared/ui/icons";
import { useDiscounts } from "../../hooks/useDiscounts";
import { useCallback, useState } from "react";

export const DiscountsFilters = () => {
  const [search, setSearch] = useState("");
  const { searchDiscountsHandler, filterCategories, filterByCategoryHandler } =
    useDiscounts();

  const onSearchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = useCallback(() => {
    searchDiscountsHandler(search);
  }, [searchDiscountsHandler, search]);

  const onClearHandler = useCallback(() => {
    setSearch("");
  }, []);

  return (
    <div className="flex gap-3 w-full">
      <div className="flex gap-3">
        <div className="flex items-center">
          <Input
            placeholder="Discount name, code"
            className="w-[14.5rem]"
            clearable={true}
            onChange={onSearchChangeHandler}
            onClear={onClearHandler}
            splitRight={true}
            appendIcon={<Search />}
          />
        </div>
        <Select
          options={filterCategories}
          onValueChange={filterByCategoryHandler}
          placeholder="Applies to"
          className="w-[17.75rem]"
        />
      </div>
      <Button variant="outline" onClick={onSearchHandler}>
        Search
      </Button>
      <Button variant="ghost">Clear all</Button>
    </div>
  );
};
