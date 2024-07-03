import { Request, Response } from "express";
import { ProductService } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
};
