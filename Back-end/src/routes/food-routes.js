import express from "express";
import {
    getAllFood,
    createFood
} from "../controllers/food-controller.js"
export const foodRouter = express.Router();

foodRouter.get("/getAllFood", getAllFood);
foodRouter.post("/createFood", createFood);
