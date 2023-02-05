"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionService_1 = __importDefault(require("../service/transactionService"));
class TransactionController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let id = req.params.id;
                let transaction = await transactionService_1.default.getAll(id);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newTransaction = transactionService_1.default.save(req.body);
                res.status(200).json(newTransaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            try {
                let id = req.params.id;
                await transactionService_1.default.remove(id);
                res.status(200).json('Delete Success !!!');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let newTransaction = req.body;
                await transactionService_1.default.update(id, newTransaction);
                res.status(200).json('Update Success !!!');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let transaction = await transactionService_1.default.findById(id);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByType = async (req, res) => {
            try {
                let type = req.query.type;
                console.log(type);
                let transaction = await transactionService_1.default.findByType(type);
                res.status(200).json(transaction);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transactionController.js.map