import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  done: { type: Boolean, default: false },
});

export default mongoose.model("Task", taskSchema);
