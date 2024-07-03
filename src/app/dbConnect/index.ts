import mongoose from "mongoose";
import config from "../config";

const dbConnected = async function main() {
  try {
    await await mongoose.connect(config.database_url as string);
    console.log("database connected successfull");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnected;
