declare class AuthService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User not found" | "Password does not match" | {
        token: any;
        idUser: any;
        userName: any;
        role: any;
    }>;
}
declare const _default: AuthService;
export default _default;
