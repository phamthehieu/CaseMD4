import {Router} from "express";
import categoryController from "../controller/categoryController";
export const categoryRouter = Router()
categoryRouter.get('',categoryController.getAll)
categoryRouter.post('',categoryController.create)
categoryRouter.delete('/:id',categoryController.delete)
categoryRouter.put('/:id',categoryController.update)
