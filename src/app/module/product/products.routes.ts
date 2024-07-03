import express from "express";
import { ProductController } from "./product.controllers";
const router = express.Router();
router.post("/products", ProductController.createProduct);
router.put("/products/:productId", ProductController.updateData);
router.delete("/products/:productId", ProductController.deleteProduct);
router.get("/products", ProductController.getAllProduct);
router.get("/products/:productId", ProductController.getSingleProductFromDB);


export const ProductRoutes = router;
