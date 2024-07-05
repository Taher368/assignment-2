"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router.post("/products", product_controllers_1.ProductController.createProduct);
router.put("/products/:productId", product_controllers_1.ProductController.updateData);
router.delete("/products/:productId", product_controllers_1.ProductController.deleteProduct);
router.get("/products/:productId", product_controllers_1.ProductController.getSingleProductFromDB);
router.get("/products", product_controllers_1.ProductController.getAllProduct);
exports.ProductRoutes = router;
