import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category-controller.js";

const router = express.Router();

// Route to create a new category
router.post("/categories", createCategory);

// Route to get all categories
router.get("/categories", getAllCategories);

export { router as categoryRouter };
