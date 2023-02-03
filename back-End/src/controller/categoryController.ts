import  {Request, Response} from 'express';
import categoryService from "../service/categoryService";

class CategoryController {
    constructor() {
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let categories = await categoryService.getAll();
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json(e.message);
        }
    };

}
export default new CategoryController()
