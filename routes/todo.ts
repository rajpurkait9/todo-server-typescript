import { Router } from "express";
import { createTodo, deleteTodo, getAllToddos, updateTodo } from "../controller/todo";
const todoRoute = Router();

todoRoute.get("/api/v1/getalltodo", getAllToddos);
todoRoute.post("/api/v1/createtodo", createTodo);
todoRoute.patch("/api/v1/updatetodo",updateTodo);
todoRoute.delete("/api/v1/deletetodo",deleteTodo);

export default todoRoute;
