import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import connectDB from "./config/mongodb.js";

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
