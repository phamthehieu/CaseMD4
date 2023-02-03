"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("../model/transaction");
const data_soure_1 = require("../data-soure");
class TransactionService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from transaction join category on transaction.category = category.idCategory`;
            return await this.transactionRepository.query(sql);
        };
        this.save = async (transaction) => {
            return this.transactionRepository.save(transaction);
        };
        this.findById = async (id) => {
            return this.transactionRepository.findOneBy({ idTransaction: id });
        };
        this.remove = async (id) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            if (!transaction) {
                return null;
            }
            else {
                return this.transactionRepository.delete({ idTransaction: id });
            }
        };
        this.update = async (id, newTransaction) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            if (!transaction) {
                return null;
            }
            else {
                return this.transactionRepository.update({ idTransaction: id }, newTransaction);
            }
        };
        this.transactionRepository = data_soure_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transactionService.js.map