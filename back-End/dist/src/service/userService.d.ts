declare class UserService {
    private userRepository;
    constructor();
    editProfile: (id: any, newProfile: any) => Promise<any>;
    lock: (id: any) => Promise<any>;
    getUser: () => Promise<any>;
}
declare const _default: UserService;
export default _default;
