import {Transaction} from "../model/transaction";
import {AppDataSource} from "../data-soure";

class TransactionService {
    private transactionRepository
    constructor() {
        this.transactionRepository = AppDataSource.getRepository(Transaction)
    }
    getAll = async (id) =>{
        let sql = `select * from transaction join category on transaction.category = category.idCategory WHERE wallet = ${id}`
        return await this.transactionRepository.query(sql)
    }
    save = async (transaction) =>{
        return this.transactionRepository.save(transaction)
    }
    findById = async (id) =>{
        let transaction = this.transactionRepository.findOneBy({idTransaction :id})
        return transaction;
    }
    remove = async (id)=>{
        let transaction = this.transactionRepository.findOneBy({idTransaction :id})

        if(!transaction){
            return null
        }
        else {
            return  this.transactionRepository.delete({idTransaction :id})
        }
    }
    update = async (id,newTransaction)=>{
        let transaction = this.transactionRepository.findOneBy({idTransaction : id})
        if (!transaction){
            return null
        }
        else {
            return  this.transactionRepository.update({idTransaction :id},newTransaction)
        }
    }
    findByType = async (type, id) =>{
        let sql = `select * from transaction join category on transaction.category = category.idCategory where transaction.type like '%${type}%' and wallet = ${id}`
        let transaction = await  this.transactionRepository.query(sql)
        if(!transaction){
            return null
        }
        else{
            return transaction
        }
    }

    searchByMonth = async (id, month) =>{
        let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${id} and transaction.month = ${month}`
        return await this.transactionRepository.query(sql)
    }

    searchByDate = async (id, month, date) =>{
        let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${id} and transaction.month = ${month} and transaction.date = ${date}`
        return await this.transactionRepository.query(sql)
    }
}
export default new TransactionService()