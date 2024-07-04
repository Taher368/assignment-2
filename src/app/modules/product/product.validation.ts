import { z } from "zod";
const IVariantsZodSchema = z.object({
  type: z.string({ message: "Type is required" }),
  value: z.string({ message: "Value is required" }),
});

const IProductZodSchema = z.object({
  name: z.string({ message: "Name is required" }),
  description: z.string({ message: "description is required" }),
  price: z
    .number({ message: "price must be in number" })
    .positive({ message: "Price must be in Positive value" }),
  category: z.string({ message: "category is required" }),
  tags: z.array(z.string({ message: "tags is required" })),
  variants: z.array(IVariantsZodSchema),
  inventory: z.object({
    quantity: z
      .number({ message: "Quantity need to be in nubmer" })
      .int({ message: "quantity must be in integer" }),
    inStock: z.boolean({ message: "inStock is must be ture or false " }),
  }),
});

export default IProductZodSchema;
