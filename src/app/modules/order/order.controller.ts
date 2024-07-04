import { Request, Response } from "express";
import { OrderServices } from "./order.services";
const createOrder = async (req: Request, res: Response) => {
  const product = req.body;

  try {
    const result = await OrderServices.createOrderToDB(product);

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
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `${error.message}`,
    });
  }
};
const getSingleUserOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  console.log(email);

  try {
    const result = await OrderServices.getSingleUserOrdersFromDB(email);
    res.json({
      success: true,
      messages: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      mesage: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleUserOrders,
};
