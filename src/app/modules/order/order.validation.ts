import { z } from "zod";
import { Types } from "mongoose";

const OrderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  productId: z
    .string()
    .refine((value) => Types.ObjectId.isValid(value), {
      message: "Invalid ObjectId format",
    })
    .transform((value) => new Types.ObjectId(value)),
  price: z
    .number({ message: "price must be in number" })
    .positive({ message: "Price must be positibe" }),
  quantity: z
    .number({ message: "quantity must be in number" })
    .int({ message: "quantity must be integer" })
    .positive({ message: "quantity must be positibe" }),
});

export default OrderValidationSchema;
