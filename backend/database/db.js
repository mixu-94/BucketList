import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

try {
  const mongoDb = process.env.MONGO_DB_HOST;
  const client = await mongoose.connect(mongoDb);
  console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (err) {
  console.log(err);
}

const db = mongoose.connection;
db.on("connected", console.log.bind(console, "mongoDB is connected"));
db.on("error", console.error.bind(console, "MongoDB connection error"));

export default db;
