import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/components/Table/Table";

const invoices = [
  {
    name: "INV001",
    appliesTo: "Paid",
    timePeriod: "$250.00",
    discountAmount: "8€",
  },
  {
    name: "INV002",
    appliesTo: "Pending",
    timePeriod: "$150.00",
    discountAmount: "8€",
  },
  {
    name: "INV003",
    appliesTo: "Unpaid",
    timePeriod: "$350.00",
    discountAmount: "8€",
  },
  {
    name: "INV004",
    appliesTo: "Paid",
    timePeriod: "$450.00",
    discountAmount: "8€",
  },
  {
    name: "INV005",
    appliesTo: "Paid",
    timePeriod: "$550.00",
    discountAmount: "8€",
  },
  {
    name: "INV006",
    appliesTo: "Pending",
    timePeriod: "$200.00",
    discountAmount: "8€",
  },
  {
    name: "INV007",
    appliesTo: "Unpaid",
    timePeriod: "$300.00",
    discountAmount: "8€",
  },
  {
    name: "INV001",
    appliesTo: "Paid",
    timePeriod: "$250.00",
    discountAmount: "8€",
  },
];

export const DiscountsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Applies to</TableHead>
          <TableHead>Time period</TableHead>
          <TableHead className="text-right">Discount amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.appliesTo}</TableCell>
            <TableCell>{invoice.timePeriod}</TableCell>
            <TableCell className="text-right">
              {invoice.discountAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
