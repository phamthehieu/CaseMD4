import {Router} from "express";
import AuthController from "../controller/authController";
export const authRouter = Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)
