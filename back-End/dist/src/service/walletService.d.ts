declare class WalletService {
    private walletRepository;
    constructor();
    getAllWallet: (id: any) => Promise<any>;
    createWallet: (wallet: any) => Promise<any>;
    updateWallet: (id: any, newWallet: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
