import { Button } from "@/shared/ui/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/components/Table/Table";
import { Pencil } from "@/shared/ui/icons";
import { useDiscounts } from "../../hooks/useDiscounts";
import { formatDate } from "@/shared/lib/utils";

export const DiscountsTable = () => {
  const { discounts } = useDiscounts();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[189px]">Name</TableHead>
          <TableHead className="w-[151px]">Applies to</TableHead>
          <TableHead>Time period</TableHead>
          <TableHead className="w-[138px]">Discount amount</TableHead>
          <TableHead className="w-12" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {discounts.map((discount) => (
          <TableRow key={discount.id}>
            <TableCell>{discount.name}</TableCell>
            <TableCell>{discount.category}</TableCell>
            <TableCell>
              {`${formatDate(discount.startDate)} – ${formatDate(
                discount.endDate
              )}`}
            </TableCell>
            <TableCell>{`${discount.discountAmount}€`}</TableCell>
            <TableCell>
              <Button
                variant="white"
                size="sm"
                iconOnly={true}
                aria-label="Edit"
              >
                <Pencil />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
