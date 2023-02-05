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
        let sql = `select * from wallet
            join transaction on wallet.transaction = transaction.idTransaction
            where wallet.idWallet = ${id}`

        return await this.walletRepository.update({idWallet: id}, newWallet)
    }

    delete = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        if (!wallet) {
            return null
        }
        return await this.walletRepository.delete({idWallet: id})
    }
}

export default new WalletService