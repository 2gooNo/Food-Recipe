import express from "express";
import { createUser, getAllUsers, getUser } from "../controllers/user-controller.js";
import { login } from "../controllers/login-controller.js";
import {verifyToken} from "../middleWare/authenticator.js"

export const userRouter = express.Router();

// post => createUser
// get => getAllUser, getUser
// put => updateUser
// delete => deleteUser

userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/getUser', verifyToken, getUser);
userRouter.post('/signUp', createUser);
userRouter.post('/logIn', login)