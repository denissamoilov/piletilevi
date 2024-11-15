import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/components";
import { ChevronDown } from "@/shared/ui/icons";

export const CategoryDropdown = ({
  categories,
  value = [],
  onChange,
}: {
  categories: string[];
  value?: string[];
  onChange: (categories: string[]) => void;
}) => {
  const onChangeHandler = (category: string, isChecked: boolean) => {
    const updatedCategories = isChecked
      ? [...value!, category]
      : value!.filter((c) => c !== category);
    onChange(updatedCategories);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="input"
          className="w-[17.75rem]"
          appendIcon={<ChevronDown className="text-primary-500" />}
        >
          {value.length ? value.join(", ") : "Applies to"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {categories.map((category) => (
          <DropdownMenuCheckboxItem
            key={category}
            checked={value?.includes(category)}
            onCheckedChange={(isChecked) =>
              onChangeHandler(category, isChecked)
            }
          >
            {category}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
