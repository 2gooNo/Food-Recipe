import { FoodModel } from "../models/food-model.js";

export const getAllFood = async (req, res) => {
  try {
    const { category } = req.body

    if (category) { }
    else {
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
    // const findFood = await FoodModel.findOne({ findFood: id.id });
    const findFood = await FoodModel.findById(id)

    res.status(200).json({ findFood: findFood }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createFood = async (req, res) => {
  try {
    const { foodName, category, recipes, instruction,foodCreator,like,imgSrc } =
      req.body;

    const food = await FoodModel.create({
      foodCreator,
      like,
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
    res
      .status(200)
      .json({
        message: "Food recipe deleted successfully",
        deletedFood: deletedFood,
      });
  } catch (error) {
    res.status(404).json({ message: "Food not found" });
  }
};
