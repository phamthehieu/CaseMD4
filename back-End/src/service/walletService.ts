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
        let wallet = this.walletRepository.query(sql)
           return wallet;
    }

    createWallet = async (wallet) => {
        return this.walletRepository.save(wallet)
    }

    updateWallet = async (id, newWallet) => {
        return this.walletRepository.update({idWallet: id}, newWallet)
    }

    delete = async (id) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        if (!wallet) {
            return null
        }
        return this.walletRepository.delete({idWallet: id})
    }
}

export default new WalletService