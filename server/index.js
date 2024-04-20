import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import { UserRouter } from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use("/auth", UserRouter);

const uri =
  "mongodb+srv://swethajollu4:ztfibJTfEJzc4R8u@job-portal-demo.egfy6oq.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-demo";
mongoose.connect(uri);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
