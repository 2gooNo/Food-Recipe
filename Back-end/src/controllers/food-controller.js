import { FoodModel } from "../models/food-model.js";

export const getAllFood = async (req, res) => {
  try {
    const { category } = req.body;

    if (category) {
    } else {
      const foods = await FoodModel.find();
      return res.status(200).json({ foods: foods });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getFood = async (req, res) => {
  const { id } = req.params;
  try {
    const findFood = await FoodModel.findById(id);

    res.status(200).json({ findFood: findFood });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const { foodName, category, recipes, instruction, foodCreator, imgSrc } =
      req.body;

    const food = await FoodModel.create({
      foodCreator,
      foodName,
      category,
      recipes,
      instruction,
      imgSrc,
      createdOn: new Date(),
    });

    res.status(201).json({ success: true, data: food });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFood = await FoodModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Food recipe deleted successfully",
      deletedFood: deletedFood,
    });
  } catch (error) {
    res.status(404).json({ message: "Food not found" });
  }
};

export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const existingCategory = await FoodModel.findOne({ category: category });

    if (existingCategory) {
      return res.status(200).json({ message: "Category already exists" });
    }

    const newCategory = await FoodModel.create({
      category: category,
    });

    res
      .status(201)
      .json({ message: "Category added successfully", data: newCategory });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const searchFood = async (req, res) => {
  const { searchValue } = req.body;

  console.log(searchValue);

  try {
    const searchedFood = await FoodModel.find({ foodName: {"$regex":searchValue,"$options":"i"}});
    res
      .status(201)
      .json({ message: "food searched succesfully", data: searchedFood });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
