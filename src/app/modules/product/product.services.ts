import { IProduct } from "./product.interface";
import { Product } from "./product.model";

// create product data into database
const createProductToDB = async (product: IProduct) => {
  const data = await Product.create(product);
  console.log(data);

  return data;
};

// update single product into database
const updateProdcutoODB = async (productId: string, productData: IProduct) => {
  const updateData = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: productData },
    { new: true }
  ).lean();

  if (!updateData) {
    throw new Error("product not found!");
  }
  return updateData;
};

// get all products data available in database
const getAllProductFromDB = async (searchTerm: string | null) => {
  let datas;
  if (searchTerm) {
    // Search for products matching searchTerm

    const regex = new RegExp(searchTerm, "i");
    datas = await Product.find({ name: { $regex: regex } }).lean();
  } else {
    // If no searchTerm provided, fetch all products
    datas = await Product.find().lean();
  }
  return datas;
};
// get single product data from database
const getSingleProductFromDB = async (productId: string) => {
  const data = await Product.findOne({ _id: productId }).lean();

  if (data) {
    data.variants = data.variants.map((variant) => ({
      type: variant.type,
      value: variant.value,
    }));
  }

  if (data === null) {
    throw new Error("Product not found");
    return;
  }
  return data;
};
// delte product data from database
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
