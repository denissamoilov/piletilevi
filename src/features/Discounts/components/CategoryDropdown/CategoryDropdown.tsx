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
  className,
}: {
  categories: string[];
  value?: string[];
  onChange: (categories: string[]) => void;
  className?: string;
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
          className={className}
          appendIcon={<ChevronDown className="text-primary-500" />}
        >
          {value.length ? value.join(", ") : "Applies to"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
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
