import { foodModel } from "../models/food-model.js";

export const getFood = async (req, res) => {
  try {
    const recipes = await foodModel.find();

    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const { name, description, category, recipes, instruction, images } =
      req.body;

    const food = await foodModel.create({
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

export const foods = async (req, res) => {
  const params = req.params;

  try {
    const recipes = await foodModel.find({ category: params.lesson });
    res.status(200).json({ recipes: rec });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
