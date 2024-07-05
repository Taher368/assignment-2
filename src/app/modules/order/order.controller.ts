import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import OrderValidationSchema from "./order.validation";
import { z } from "zod";
const createOrder = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const validateData = OrderValidationSchema.parse(product);
    const result = await OrderServices.createOrderToDB(validateData);

    res.json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.json({ success: false, error: error.errors });
    }
    res.json({ success: false, message: "Order created failed" });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await OrderServices.getAllOrdersFromDB(
      email as string | null
    );
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `No order found`,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
