import {AppDataSource} from "../data-soure";
import {User} from "../model/user";
import {Wallet} from "../model/wallet";

class WalletService {
    private walletRepository;

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet);
    }

    getAllWallet = async () => {
        return this.walletRepository.find()
    }

    createWallet = async (wallet) => {
        return this.walletRepository.save(wallet)
    }

    updateWallet = async (id, newWallet) => {
        let wallet = await this.walletRepository.findOneBy({idWallet: id})
        if (!wallet) {
            return null
        }
        return this.walletRepository.update({idWallet: id}, newWallet)
    }
}

export default new WalletService