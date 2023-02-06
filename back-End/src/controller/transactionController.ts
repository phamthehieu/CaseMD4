import  {Request, Response} from 'express';
import transactionService from "../service/transactionService";
import walletController from "./walletController";

class TransactionController {
    constructor() {
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let transaction = await transactionService.getAll(id);
            res.status(200).json(transaction)
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
    create = async (req: Request, res :Response)=>{
        try{
            let newTransaction = {
                wallet: req.body.wallet,
                category: req.body.category,
                type: req.body.type,
                moneyTransaction: req.body.moneyTransaction,
                month: new Date().getMonth() + 1,
                date: new Date().getDate()
            }
            await transactionService.save(newTransaction)
            walletController.editMoney(req.body.wallet)
            res.status(200).json("add ok")
        }
        catch (e){
            res.status(500).json(e.message)
        }
    }
    delete = async (req: Request, res :Response)=>{
        try{
            let id =  req.params.id
            await transactionService.remove(id)
            res.status(200).json('Delete Success !!!')
        }
        catch (e){
            res.status(500).json(e.message)
        }
    }
    update = async (req: Request, res :Response)=> {
        try {
            let id = req.params.id
            let newTransaction = req.body
            await transactionService.update(id,newTransaction)
            res.status(200).json('Update Success !!!')
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findById = async (req: Request, res :Response)=> {
        try {
            let id = req.params.id
            let transaction = await transactionService.findById(id)
            res.status(200).json(transaction)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findByType = async (req: Request, res :Response)=> {
        try {
            let type = req.query.type
            console.log(type);

            let transaction = await transactionService.findByType(type)
            res.status(200).json(transaction)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    searchByMonth = async (req: Request, res :Response) => {
        console.log(1)
            let month = req.query.month
            let transaction = await transactionService.searchByMonth(month)
            res.status(200).json(transaction)

    }

}
export default new TransactionController()
