import {Router} from "express";
import UserController from "../controller/userController";
import {auth} from "../middleware/auth";
import {router} from "./router";

export const userRouter = Router()
// userRouter.use(auth)

userRouter.put('/edit/:id', UserController.editUser)
