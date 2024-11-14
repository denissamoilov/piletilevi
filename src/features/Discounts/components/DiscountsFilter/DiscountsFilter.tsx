import { Button, Input, Select } from "@/shared/ui/components";
import { Search } from "@/shared/ui/icons";

export const DiscountsFilters = () => {
  return (
    <div className="flex gap-3 w-full">
      <div className="flex gap-3">
        <div className="flex items-center">
          <Input
            placeholder="Discount name, code"
            className="w-[14.5rem]"
            clearable={true}
            onClear={() => {}}
            splitRight={true}
          />
          <Button
            variant="white"
            iconOnly={true}
            className="!rounded-s-none border-l-0"
          >
            <Search />
          </Button>
        </div>
        <Select options={[]} placeholder="Applies to" />
      </div>
      <Button variant="outline">Search</Button>
      <Button variant="ghost">Clear all</Button>
    </div>
  );
};
