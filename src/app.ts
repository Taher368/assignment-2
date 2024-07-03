import express from "express";
import cors from "cors";
const app = express();

// middle ware

app.use(express.json());
app.use(cors());

export default app;
