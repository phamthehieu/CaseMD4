import {Router} from "express";
import {auth} from "../middleware/auth";
import {authRouter} from "./authRouter";
export const router = Router()

router.use('/auth', authRouter)
router.use(auth)