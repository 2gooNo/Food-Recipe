// import { CategoryModel } from "../models/category-model.js";
import { foodModel } from "../models/food-model.js";

export const getFood = async (req, res) => {
  try {
    const quizs = await foodModel.find();

    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFood = async (req, res) => {
  console.log(req.body);
  try {
    const { questions } = req.body;

    const recipe = await foodModel.create({
      questions: questions.map((question) => ({
        question: question.question,
        answers: question.options,
        correctAnswer: question.correctOption,
      })),

      category: req.body.category,
    });

    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
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