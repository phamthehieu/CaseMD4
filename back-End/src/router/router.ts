import {Router} from "express";
import {auth} from "../middleware/auth";
import {authRouter} from "./authRouter";
import {userRouter} from "./userRouter";
import {transactionRouter} from "./transactionRouter";
import {categoryRouter} from "./categoryRouter";

export const router = Router()

router.use('/auth', authRouter)
router.use(auth)

router.use('/user', userRouter)
router.use('/transactions',transactionRouter)
router.use('/categories',categoryRouter)

