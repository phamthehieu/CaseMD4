"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const walletService_1 = __importDefault(require("../service/walletService"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            let wallet = await this.WalletService.getAllWallet();
            res.status(200).json(wallet);
        };
        this.create = async (req, res) => {
            let wallet = {
                nameWallet: req.body.nameWallet,
                user: req.decoded.idUser,
            };
            console.log(wallet);
            let save = await this.WalletService.createWallet(wallet);
            res.status(201).json(save);
        };
        this.edit = async (req, res) => {
            let id = req.params.id;
            let newWallet = await this.WalletService.updateWallet(id, req.body);
            res.status(200).json(newWallet);
        };
        this.WalletService = walletService_1.default;
    }
}
exports.default = new WalletController();
//# sourceMappingURL=walletController.js.map