import {Router} from "express";
import transactionController from "../controller/transactionController";
import {auth} from "../middleware/auth";
export const transactionRouter = Router()
transactionRouter.get('/:id',transactionController.getAll)
transactionRouter.post('/',transactionController.create)
transactionRouter.delete('/:id',transactionController.delete)
transactionRouter.put('/:id',transactionController.update)
transactionRouter.get('/search/',transactionController.findByType)
