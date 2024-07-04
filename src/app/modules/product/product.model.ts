import { model, Schema } from "mongoose";
import { IProduct, IVariants } from "./product.interface";

const variantSchema = new Schema<IVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantSchema],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const Product = model<IProduct>("Product", productSchema);
