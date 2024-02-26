import express from "express";
import {
    getFood,
    createFood,
    foods,
} from "../controllers/food-controller.js"
export const foodRouter = express.Router();

foodRouter.get("/getFood", getFood);
foodRouter.get("/createFood", createFood);
foodRouter.get("/food", foods);
