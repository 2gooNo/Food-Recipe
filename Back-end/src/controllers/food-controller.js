import { FoodModel } from "../models/food-model.js";

export const getAllFood = async (req, res) => {
  try {
    const foods = await FoodModel.find();

    res.status(200).json({ foods: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFood = async (req, res) => {
  const { id } = req.params;
  try {
    const foods = await FoodModel.findById({ id });

    res.status(200).json({ recipes: foods });
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
