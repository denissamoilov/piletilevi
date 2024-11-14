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
const invoices = [
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
  {
    name: "Suvesoodustus",
    appliesTo: "Event",
    timePeriod: "13.05.2023 19:00 - 14.05.2023 19:00",
    discountAmount: "8€",
  },
];

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
            <TableCell>{`${discount.startDate} - ${discount.endDate}`}</TableCell>
            <TableCell>{discount.discountAmount}</TableCell>
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
