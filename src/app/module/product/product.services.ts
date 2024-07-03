import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (product: IProduct) => {
  const data = Product.create(product);

  return data;
};

const getAllProductFromDB = async () => {
  const data = Product.find();
  return data;
};

export const ProductService = {
  createProductToDB,
  getAllProductFromDB,
};
