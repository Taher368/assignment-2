import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

// create order into database
const createOrderToDB = async (order: IOrder) => {
  const { productId, quantity, email, price } = order;

  // Find the product by ID
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not Funt");
  }

  //  Check if there's sufficient quantity in stock
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // Update product inventory
  product.inventory.quantity -= quantity;
  if (product.inventory.quantity <= 0) {
    product.inventory.inStock = false;
  }

  //  Save updated product into the database
  await product.save();

  // update product price
  const newOrder = {
    productId,
    quantity,
    email,
    price,
  };

  // Save the order document
  await Order.create(newOrder);

  return newOrder;
};

export const OrderServices = {
  createOrderToDB,
};
