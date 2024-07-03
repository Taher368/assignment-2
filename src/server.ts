import app from "./app";
import config from "./app/config";
import dbConnected from "./app/dbConnect";
const port = config.port;

// database connect
dbConnected();

app.get("/", (req: Request, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
