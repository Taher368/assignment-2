"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./app/modules/product/products.routes");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
// middle ware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// server routes
app.use("/api", products_routes_1.ProductRoutes);
// order routes
app.use("/api", order_route_1.OrderRoutes);
exports.default = app;
