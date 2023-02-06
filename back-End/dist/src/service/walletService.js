"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.getAllWallet = async (id) => {
            let sql = `SELECT * from wallet where user = ${id}`;
            let wallet = await this.walletRepository.query(sql);
            return wallet;
        };
        this.createWallet = async (wallet) => {
            return await this.walletRepository.save(wallet);
        };
        this.updateWallet = async (id, newWallet) => {
            return await this.walletRepository.update({ idWallet: id }, newWallet);
        };
        this.delete = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            if (!wallet) {
                return null;
            }
            return await this.walletRepository.delete({ idWallet: id });
        };
        this.transaction = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ idWallet: id });
            let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${wallet.idWallet}`;
            return await this.walletRepository.query(sql);
        };
        this.editIncomeMoney = async (id, type, money) => {
            let a = Number(money);
            if (type === 'income') {
                let moneyWallet = await this.walletRepository.findOneBy({ idWallet: id });
                let income = moneyWallet.incomeMoney;
                let b = Number(income);
                let c = a + b;
                return await this.walletRepository.update({ idWallet: id }, { incomeMoney: c });
            }
            else {
                let moneyWallet = await this.walletRepository.findOneBy({ idWallet: id });
                let pay = moneyWallet.payMoney;
                let n = Number(pay);
                let d = a + n;
                return await this.walletRepository.update({ idWallet: id }, { payMoney: d });
            }
        };
        this.walletRepository = data_soure_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService;
//# sourceMappingURL=walletService.js.map