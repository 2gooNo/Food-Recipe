import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: String,
});
export const CategoryModel = mongoose.model("food", categorySchema);
