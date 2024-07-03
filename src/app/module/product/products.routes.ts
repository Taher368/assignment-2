import express from "express";
import { ProductController } from "./product.controllers";
const router = express.Router();
router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.getAllProduct);

export const ProductRoutes = router;
