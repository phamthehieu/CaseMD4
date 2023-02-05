declare class WalletService {
    private walletRepository;
    constructor();
    getAllWallet: (id: any) => Promise<any>;
    createWallet: (wallet: any) => Promise<any>;
    updateWallet: (id: any, newWallet: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    transaction: (id: any) => Promise<any>;
    editIncomeMoney: (id: any, type: any, money: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
