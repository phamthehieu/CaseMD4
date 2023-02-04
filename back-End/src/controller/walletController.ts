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
            let save = await this.WalletService.createWallet(req.body)
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
}
export default new WalletController();