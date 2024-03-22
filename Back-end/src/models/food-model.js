import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodCreator:String,
  foodName: String,
  category: [String],
  like:Number,
  recipes: [
    {
      recipe: String,
      size: String,
    },
  ],
  instruction: [
      "hdhdhhddhhd",
      "jdjdjjdjdj"
  ],
});
export const FoodModel = mongoose.model("food", foodSchema);
