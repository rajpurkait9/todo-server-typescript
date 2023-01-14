import express, { Application } from "express";
import { config } from "dotenv";
import { connectDB } from "./db/connectDB";
import todoRoute from "./routes/todo";
config();
const app: Application = express();

// middlewares
app.use(express.json());

// routes
app.use(todoRoute);

const startServer = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected successfully..");
    const port: number = Number(process.env.PORT) || 9001;
    app.listen(port, () => {
      console.log(`server is running on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
