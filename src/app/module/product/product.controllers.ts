import { Request, Response } from "express";
import { ProductService } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductToDB(productData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "product created failed" });
  }
};

export const ProductController = {
  createProduct,
};
