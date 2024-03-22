import express from "express";
import { createUser, getAllUsers, getUser, forgotPassword, resetPassword } from "../controllers/user-controller.js";
import { login } from "../controllers/login-controller.js";
import { verifyToken } from "../middleWare/authenticator.js";

export const userRouter = express.Router();

userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/getUser', verifyToken, getUser);
userRouter.post('/signUp', createUser);
userRouter.post('/logIn', login);
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password', resetPassword);
