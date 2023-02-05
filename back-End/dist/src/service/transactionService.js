"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("../model/transaction");
const data_soure_1 = require("../data-soure");
class TransactionService {
    constructor() {
        this.getAll = async (id) => {
            let sql = `select * from transaction join category on transaction.category = category.idCategory WHERE wallet = ${id}`;
            return await this.transactionRepository.query(sql);
        };
        this.save = async (transaction) => {
            return this.transactionRepository.save(transaction);
        };
        this.findById = async (id) => {
            let transaction = this.transactionRepository.findOneBy({ idTransaction: id });
            return transaction;
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
        this.findByType = async (type) => {
            let sql = `select * from transaction join category on transaction.category = category.idCategory where transaction.type like '%${type}%'`;
            let transaction = await this.transactionRepository.query(sql);
            if (!transaction) {
                return null;
            }
            else {
                return transaction;
            }
        };
        this.transactionRepository = data_soure_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transactionService.js.map