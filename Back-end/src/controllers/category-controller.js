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
    const body = req.body;

    const newCategory = await CategoryModel.create(body);

    res
      .status(201)
      .json({ message: "Category added successfully", data: newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
