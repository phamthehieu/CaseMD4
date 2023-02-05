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

    searchByMonth = async (month) =>{
        return this.transactionRepository.find({month: month})
    }


}
export default new TransactionService()