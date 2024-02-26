
import { foodModel } from "../models/food-model.js";

const req =request()

export const getFood = async (req, res) => {
  try {
    const foods = await foodModel.find();

    res.status(200).json({ recipes: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createFood = async (req, res) => {
  try {
    const { name, description, category, recipes, instruction, images } = req.body;

    const food = await Food.create({
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

