import {Router} from "express";
import {auth} from "../middleware/auth";
import {authRouter} from "./authRouter";
import {transactionRouter} from "./transactionRouter";
import {categoryRouter} from "./categoryRouter";
export const router = Router()

router.use('/auth', authRouter)
router.use(auth)
router.use('/transactions',transactionRouter)
router.use('/categories',categoryRouter)
