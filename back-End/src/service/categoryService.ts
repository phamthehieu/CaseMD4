import {AppDataSource} from "../data-soure";
import {Category} from "../model/category";

class CategoryService {
    private categoryRepository

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let sql = `select * from category`
        return await this.categoryRepository.query(sql)
    }
}

export default new CategoryService()