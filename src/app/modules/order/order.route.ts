import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();
router.get("/orders/", orderController.getSingleUserOrders);
router.get("/orders", orderController.getAllOrders);

router.post("/orders", orderController.createOrder);

export const OrderRoutes = router;
