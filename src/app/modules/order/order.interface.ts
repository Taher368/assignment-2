import mongoose from "mongoose";

export type IOrder = {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
};
