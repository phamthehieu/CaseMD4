declare class CategoryService {
    private categoryRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (category: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    update: (id: any, newCategory: any) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
