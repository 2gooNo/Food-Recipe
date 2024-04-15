import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodCreator: String,
  foodName: String,
  category: [String],
  imgSrc: String,
  recipes: [String],
  instruction: [String],
});
export const FoodModel = mongoose.model("food", foodSchema);
