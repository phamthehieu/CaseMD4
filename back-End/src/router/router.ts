import {Router} from "express";
import {auth} from "../middleware/auth";
import {authRouter} from "./authRouter";
import {userRouter} from "./userRouter";
export const router = Router()

router.use('/auth', authRouter)
router.use(auth)
router.use('/user', userRouter)