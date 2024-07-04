import { Request, Response } from "express";
import { ProductService } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductToDB(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "product created failed" });
  }
};
const updateData = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await ProductService.updateProdcutoODB(
      productId,
      productData,
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;

    const result = await ProductService.getAllProductFromDB(
      searchTerm as string | null,
    );
    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      res.json({ success: false, message: "No product found" });
    }
  } catch (error) {
    res.json({ success: false, message: "something wen't wrong" });
  }
};
const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.json({ success: false, message: "Product no found" });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProductFromDb(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.json({ success: false, message: "something wen't wrong" });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProductFromDB,
  deleteProduct,
  updateData,
};
