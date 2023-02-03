declare class UserService {
    private userRepository;
    constructor();
    editProfile: (id: any, newProfile: any) => Promise<any>;
    lock: (id: any, newStatus: any) => Promise<void>;
}
declare const _default: UserService;
export default _default;
