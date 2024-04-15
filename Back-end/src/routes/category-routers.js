import express from "express";
import {
  addCategory,
  getAllCategories,
} from "../controllers/category-controller.js";

const router = express.Router();

router.post("/categories", addCategory);
router.get("/categories", getAllCategories);  

export { router as categoryRouter };
