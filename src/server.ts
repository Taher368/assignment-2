import { Request, Response } from "express";
import { Server } from "http";
import app from "./app";
import config from "./app/config";
import dbConnected from "./app/dbConnect";
const port = config.port;
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

// database connect
let server: Server;
process.on("unhandledRejection", (error) => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
  console.log(error);
});

dbConnected();

app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
