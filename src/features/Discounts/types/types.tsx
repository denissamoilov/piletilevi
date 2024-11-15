import { z } from "zod";

export type Discount = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  discountAmount: number;
  category: string;
};

const discountsFiltersSchema = z.object({
  search: z.string().optional(),
  categories: z.array(z.string()).optional(),
});

export type DiscountsFiltersSchema = z.infer<typeof discountsFiltersSchema>;
