import { z } from "zod";

export const ItemSchema = z.object({
  description: z.string().min(1),
  qty: z.coerce.number().positive(),
  unit_price: z.coerce.number().nonnegative(),
  line_total: z.coerce.number().nonnegative().optional(),
});

export const InvoiceSchema = z.object({
  invoice_number: z.string().min(1),
  client_name: z.string().optional(),
  issue_date: z.string().optional(),
  due_date: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(ItemSchema).min(1),
});
