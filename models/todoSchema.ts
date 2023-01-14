import mongoose, { model } from "mongoose";

interface Todo {
  taskname: string;
}
const todoSchema = new mongoose.Schema<Todo>(
  {
    taskname: { type: String, required: true },
  },
  { timestamps: true }
);

const todo = model<Todo>("todonewnow", todoSchema);

export default todo;
