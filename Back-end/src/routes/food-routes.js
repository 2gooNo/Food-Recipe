import express from "express";
import { Router } from "express";
import {
    getFood,
    createFood,
    foods,
} from "../controllers/food-controller.js"
export const foodRouter = Router();

foodRouter.get("/getFood", getFood);
foodRouter.get("/createFood", createFood);
foodRouter.get("/food", foods);
