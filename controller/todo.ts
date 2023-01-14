import { Request, Response } from "express";
import Todo from "../models/todoSchema";

export const getAllToddos = async (req: Request, res: Response) => {
  try {
    const getAll = await Todo.find({});
    res.status(200).send(getAll);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const taskname: string = req.body.taskname;
    const createTodoNow = await Todo.create({ taskname });
    res.status(200).send(createTodoNow);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { taskname, todoId } = req.body;
    await Todo.findByIdAndUpdate({ _id: todoId }, { taskname }, { new: true });
    const newTodo = await Todo.findOne({ _id: todoId });
    res.status(200).send(newTodo);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.query;
    const deleteTodoNow = await Todo.findByIdAndDelete({ _id: todoId });
    res.status(200).send(deleteTodoNow);
  } catch (error) {
    return console.log(error);
  }
};
