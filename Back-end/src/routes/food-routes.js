import express from "express";
import { Router } from "express";
import {
    getAllFood,
    createFood,
    deleteFood,
    getFood
} from "../controllers/food-controller.js"
export const foodRouter = Router();

foodRouter.get("/getAllFood", getAllFood);
foodRouter.post("/createFood", createFood);
foodRouter.delete("/deleteFood/:id", deleteFood);
foodRouter.get("/getFood/:id", getFood)