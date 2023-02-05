import  {Request, Response} from 'express';
import transactionService from "../service/transactionService";

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
            let newTransaction =  transactionService.save(req.body)
            res.status(200).json(newTransaction)
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
}
export default new TransactionController()
