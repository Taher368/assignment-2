import { Request, Response } from "express";
import { OrderServices } from "./order.services";
export const createOrder = async (req: Request, res: Response) => {
  const product = req.body;

  try {
    const result = await OrderServices.createOrderToDB(product);
    console.log("orderservice result", result);

    res.json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.json({ success: false, message: `{$error}` });
  }
};

export const orderController = {
  createOrder,
};
