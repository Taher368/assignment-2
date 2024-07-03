import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (product: IProduct) => {
  const data = await Product.create(product);
  console.log(data);
  
  return data
};

const updateProdcutoODB = async (productId: string, productData: IProduct) => {
  const updateData = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: productData },
    { new: true },
  ).lean();

  if (!updateData) {
    throw new Error("product not found!");
  }
  return updateData;
};

const getAllProductFromDB = async () => {
  const data = await Product.find().lean();
    
 
  return data;
};

const getSingleProductFromDB = async (productId: string) => {
  const data = await Product.findOne({ _id: productId }).lean();

  if(data){
    data.variants = data.variants.map(variant => ({ type:variant.type, value:variant.value}));
  }

  if (data === null) {
    throw new Error("Product not found");
    return;
  }
  return data;
};

const deleteProductFromDb = async (productId: string) => {
  const data = await Product.deleteOne({ _id: productId });
  return data;
};

export const ProductService = {
  createProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDb,
  updateProdcutoODB,
};
