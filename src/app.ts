import express, { Application } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/products.routes";
import { OrderRoutes } from "./app/modules/order/order.route";
const app: Application = express();

// middle ware

app.use(express.json());
app.use(cors());

// server routes
app.use("/api", ProductRoutes);
// order routes
app.use("/api", OrderRoutes);

export default app;
