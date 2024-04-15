import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  Image: String,
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
