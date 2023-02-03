import WalletService from "../service/walletService";

class WalletController {
    private WalletService

    constructor() {
        this.WalletService = WalletService;
    }

    showWallet = async (req, res) => {
        let wallet = await this.WalletService.getAllWallet()
        res.status(200).json(wallet)
    }

    create = async (req, res) => {
        let wallet = {
            nameWallet : req.body.nameWallet,
            user: req.decoded.idUser,
        }
        console.log(wallet)
        let save = await this.WalletService.createWallet(wallet)
        res.status(201).json(save)
    }

    edit = async (req, res) => {
        let id = req.params.id
        let newWallet = await this.WalletService.updateWallet(id, req.body)
        res.status(200).json(newWallet)
    }
}
export default new WalletController();