import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user-routes.js";
import { foodRouter } from "./routes/food-routes.js";
import { categoryRouter } from "./routes/category-routers.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

app.use(cors());
app.use(express.json());

app.use(foodRouter);
app.use(userRouter);

app.use(foodRouter);
app.use(userRouter);
app.use(categoryRouter);

const connectFoodDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tastebiterecipe:tastebiterecipe@tastebite.hfmqyok.mongodb.net/"
  );
  console.log("database1 connected");
};

connectFoodDB();

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
