import { Document } from "mongoose";

export type IVariants = {
  type: string;
  value: string;
};

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariants[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
}
