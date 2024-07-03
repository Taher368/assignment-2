import express, { Application } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/module/product/products.routes";
const app: Application = express();

// middle ware

app.use(express.json());
app.use(cors());

// server routes
app.use("/api", ProductRoutes);

export default app;
