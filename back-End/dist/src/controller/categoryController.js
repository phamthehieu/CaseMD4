"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let categories = await categoryService_1.default.getAll();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map