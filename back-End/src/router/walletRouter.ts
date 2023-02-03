import {Router} from "express";
import walletController from "../controller/walletController";

export const walletRouter = Router()

walletRouter.get('/', walletController.showWallet)
walletRouter.post('/create', walletController.create)
walletRouter.put('/edit/:id', walletController.edit)
walletRouter.delete('/delete/:id', walletController.delete)
