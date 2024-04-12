import express from "express";
import { Router } from "express";
import {
    getAllFood,
    createFood,
    deleteFood,
    getFood,
    searchFood
} from "../controllers/food-controller.js"

export const foodRouter = Router();

foodRouter.get("/getAllFood", getAllFood);
foodRouter.post("/createFood", createFood);
foodRouter.delete("/deleteFood/:id", deleteFood);
foodRouter.get("/getFood/:id", getFood)
foodRouter.post("/searchFood", searchFood)
