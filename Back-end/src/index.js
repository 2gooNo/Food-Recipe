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
    "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/"
  );
  console.log("database1 connected");
};
// try {
//   await mongoose.connect(
//     "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/Food"
//   );
//   console.log("MongoDB connected...");
// } catch (error) {
//   console.error(error.message);
//   process.exit(1);
// }

// const connectUserDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://Food-Recipe:food-recipe@food-recipe.bf2uk28.mongodb.net/User"
//   );
//   console.log("database2 connected");
// };

connectFoodDB();
// connectDB();
// connectUserDB();

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
