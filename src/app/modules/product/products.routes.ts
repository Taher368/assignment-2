import express from "express";
import { ProductController } from "./product.controllers";
const router = express.Router();
router.post("/products", ProductController.createProduct);
router.put("/products/:productId", ProductController.updateData);
router.delete("/products/:productId", ProductController.deleteProduct);

router.get("/products/:productId", ProductController.getSingleProductFromDB);
router.get("/products", ProductController.getAllProduct);

export const ProductRoutes = router;
