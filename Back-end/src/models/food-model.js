import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodCreator:String,
  foodName: String,
  description: String,
  category: [String],
  like:Number,
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
export const FoodModel = mongoose.model("food", foodSchema);
