//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";

dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

//router
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listens at port ${PORT}`);
});
