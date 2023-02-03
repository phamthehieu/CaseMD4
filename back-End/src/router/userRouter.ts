import {Router} from "express";
import UserController from "../controller/userController";
import {auth} from "../middleware/auth";
import {router} from "./router";
import userController from "../controller/userController";

export const userRouter = Router()

userRouter.put('/edit/:id', UserController.editUser)
userRouter.get('/lock/:id', UserController.lockUser)
userRouter.get('/list-user', userController.showListUser)
userRouter.get('/profile/:id', userController.showProfile)