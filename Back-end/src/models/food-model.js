import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: [String],
  recipes: [
    {
      recipe: String,
      size: String,
    },
  ],
  instruction: [
    {
      step: Number,
      description: String,
    },
  ],
});
export const FoodModel = mongoose.model("food", FoodSchema);
