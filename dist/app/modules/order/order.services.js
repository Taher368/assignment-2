"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
// create order into database
const createOrderToDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity, email, price } = order;
    // Find the product by ID
    const product = yield product_model_1.Product.findById(productId);
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
    yield product.save();
    //calculate order price
    const updatePrice = quantity * price;
    // update product price
    const newOrder = {
        productId,
        quantity,
        email,
        price: updatePrice,
    };
    console.log(newOrder);
    // Save the order document
    yield order_model_1.Order.create(newOrder);
    return newOrder;
});
const getAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (email) {
        result = yield order_model_1.Order.find({ email: email }).lean();
    }
    else {
        result = yield order_model_1.Order.find().lean();
    }
    if ((yield result).length === 0) {
        throw new Error("No order found!");
    }
    return result;
});
exports.OrderServices = {
    createOrderToDB,
    getAllOrdersFromDB,
};
