import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@/shared/ui/components";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";
import { useDiscounts } from "../../hooks/useDiscounts";
export const CreateDiscountDialog = () => {
  const { filterCategories } = useDiscounts();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new discount</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create discount</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-5 pb-10 px-8">
          <Input placeholder="Discount name" className="w-full" />
          <div className="flex gap-4">
            <CategoryDropdown
              categories={filterCategories}
              onChange={() => {}}
              className="w-full"
            />
            <Button>Add</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
