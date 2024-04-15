import CategoryModel from "../models/category-model.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const existingCategory = await CategoryModel.findOne({ category: category });

    if (existingCategory) {
      return res.status(200).json({ message: "Category already exists" });
    }

    const newCategory = await CategoryModel.create({
      category: category,
    });

    res.status(201).json({ message: "Category added successfully", data: newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
