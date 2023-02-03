import {Transaction} from "../model/transaction";
import {AppDataSource} from "../data-soure";

class TransactionService {
    private transactionRepository
    constructor() {
        this.transactionRepository = AppDataSource.getRepository(Transaction)
    }
    getAll = async () =>{
        let sql = `select * from transaction join category on transaction.category = category.idCategory`
        return await  this.transactionRepository.query(sql)
    }
    save = async (transaction) =>{
        return this.transactionRepository.save(transaction)
    }
    findById = async (id) =>{
        return
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



}
export default new TransactionService()