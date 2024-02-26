import { foodRouter } from "./routes/food-routes";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 8000;

app.use(express.json());

app.use(foodRouter);

const connectFoodDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/"
  );
  console.log("database1 connected");
};

connectFoodDB();

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
