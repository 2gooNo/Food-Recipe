import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-routes.js";
import { foodRouter } from "./routes/food-routes.js";
import mongoose from "mongoose";

const app = express();

const port = 8001;

app.use(cors());
app.use(express.json());

app.use(foodRouter);
app.use(userRouter);

const connectFoodDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/"
  );
  console.log("database1 connected");
};

// const connectUserDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/"
//   );
//   console.log("database2 connected");
// };

connectFoodDB();
// connectUserDB();

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
