"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.getAllWallet = async () => {
            return this.walletRepository.find();
        };
        this.createWallet = async (wallet) => {
            return this.walletRepository.save(wallet);
        };
        this.updateWallet = async (id, newWallet) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            if (!wallet) {
                return null;
            }
            return this.walletRepository.update({ idWallet: id }, newWallet);
        };
        this.delete = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            if (!wallet) {
                return null;
            }
            return this.walletRepository.delete({ idWallet: id });
        };
        this.walletRepository = data_soure_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService;
//# sourceMappingURL=walletService.js.map