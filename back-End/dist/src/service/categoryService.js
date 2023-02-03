"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from category`;
            return await this.categoryRepository.query(sql);
        };
        this.categoryRepository = data_soure_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map