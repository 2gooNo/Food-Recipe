import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodCreator:String,
  foodName: String,
  category: [String],
  imgSrc:String,
  like:Number,
  recipes: [
    {
      recipe: String,
      size: String,
    },
  ],
  instruction: [
    String
  ],
});
export const FoodModel = mongoose.model("food", foodSchema);
