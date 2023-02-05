import WalletService from "../service/walletService";
import categoryService from "../service/categoryService";

class WalletController {
    private WalletService

    constructor() {
        this.WalletService = WalletService;
    }

    showWallet = async (req, res) => {
            let id = req.params.id
            let wallet = await this.WalletService.getAllWallet(id)
            res.status(200).json(wallet)
    }

    create = async (req, res) => {
        let wallet = {
            nameWallet: req.body.nameWallet,
            user: req.decoded.idUser
        }
            let save = await this.WalletService.createWallet(wallet)
            res.status(201).json(save)

    }

    edit = async (req, res) => {
        let id = req.params.id
        let newWallet = await this.WalletService.updateWallet(id, req.body)
        res.status(200).json(newWallet)
    }

    delete = async (req, res) => {
            let id = req.params.id
            res.status(200).json(await this.WalletService.delete(id))
    }

    editMoney = async (id) => {
        let transaction = await this.WalletService.transaction(id)
        console.log(transaction)
        let newMoney = 0
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].type === 'thu') {
                newMoney = newMoney + transaction[i].moneyTransaction
            }else {
                newMoney = newMoney - transaction[i].moneyTransaction
            }
        }
        console.log(newMoney)
        await this.WalletService.editMoney(id, newMoney)
    }
}
export default new WalletController();