import {Router} from "express";
import UserController from "../controller/userController";
import {auth} from "../middleware/auth";
import {router} from "./router";
import userController from "../controller/userController";
import {checkRole} from "../middleware/checkRole";

export const userRouter = Router()
userRouter.put('/edit/:id', UserController.editUser)
userRouter.put('/lock/:id',checkRole,UserController.lockUser)
userRouter.get('/list-user',checkRole,userController.showListUser)
userRouter.get('/profile/:id', userController.showProfile)
userRouter.put('/changePassword/:id', userController.changePassword)