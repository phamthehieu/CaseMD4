declare class TransactionService {
    private transactionRepository;
    constructor();
    getAll: (id: any) => Promise<any>;
    save: (transaction: any) => Promise<any>;
    findById: (id: any) => Promise<void>;
    remove: (id: any) => Promise<any>;
    update: (id: any, newTransaction: any) => Promise<any>;
    findByType: (type: any) => Promise<any>;
    searchByMonth: (month: any) => Promise<any>;
}
declare const _default: TransactionService;
export default _default;
