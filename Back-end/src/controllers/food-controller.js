import { FoodModel } from "../models/food-model.js";
import { CategoryModel } from "../models/category-model.js";

export const getAllFood = async (req, res) => {
  try {
    const foods = await FoodModel.find();

    res.status(200).json({ foods: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const { name, description, category, recipes, instruction, images } =
      req.body;

    const food = await FoodModel.create({
      name,
      description,
      category,
      recipes,
      instruction,
    });

    res.status(201).json({ success: true, data: food });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = CategoryModel.find();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
