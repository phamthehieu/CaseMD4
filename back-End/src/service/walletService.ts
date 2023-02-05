import {AppDataSource} from "../data-soure";
import {User} from "../model/user";
import {Wallet} from "../model/wallet";

class WalletService {
    private walletRepository;

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet);
    }

    getAllWallet = async (id) => {
        let sql = `SELECT * from wallet where user = ${id}`
        let wallet = await this.walletRepository.query(sql)
           return wallet;
    }

    // wallet = async (id) => {
    //     return await this.walletRepository.findOneBy({idWallet: id})
    // }

    createWallet = async (wallet) => {
        return await this.walletRepository.save(wallet)
    }

    updateWallet = async (id, newWallet) => {

        return await this.walletRepository.update({idWallet: id}, newWallet)
    }

    delete = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        if (!wallet) {
            return null
        }
        return await this.walletRepository.delete({idWallet: id})
    }

    transaction = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        let sql = `select * from transaction 
                    join wallet on transaction.wallet = wallet.idWallet 
                    where wallet.idWallet = ${wallet.idWallet}`
        return  await this.walletRepository.query(sql)
    }
    editIncomeMoney = async (id,type,money) => {
        let a = Number(money)
        if (type === 'income') {
            let moneyWallet = await this.walletRepository.findOneBy({idWallet: id})
            let income = moneyWallet.incomeMoney
            let b = Number(income)
            let c = a + b
            return await this.walletRepository.update({idWallet: id},{incomeMoney: c})
        } else {
            let moneyWallet = await this.walletRepository.findOneBy({idWallet: id})
            let pay = moneyWallet.payMoney
            let n = Number(pay)
            let d = a + n
            return await this.walletRepository.update({idWallet: id},{payMoney: d})
        }
    }
}

export default new WalletService