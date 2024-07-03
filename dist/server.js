"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const dbConnect_1 = __importDefault(require("./app/dbConnect"));
const port = config_1.default.port;
// database connect
(0, dbConnect_1.default)();
app_1.default.get("/", (req, res) => {
    res.send("server running");
});
app_1.default.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
