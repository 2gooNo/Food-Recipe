import express from "express";
import { Router } from "express";
import {
    getAllFood,
    createFood,
    deleteFood
} from "../controllers/food-controller.js"
export const foodRouter = Router();

foodRouter.get("/getAllFood", getAllFood);
foodRouter.post("/createFood", createFood);
foodRouter.delete("/deleteFood/:id", deleteFood);