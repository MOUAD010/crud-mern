import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import booksRoute from "./routes/bookRoute.js";
import cors from "cors";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Access environment variables using process.env
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hi");
});
app.use("/books", booksRoute);
mongoose
  .connect(process.env.MONGO_DB_CON_STR)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
