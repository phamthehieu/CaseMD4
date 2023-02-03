"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../service/authService"));
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            let user = await this.AuthService.register(req.body);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let response = await this.AuthService.checkUser(req.body);
            res.status(200).json(response);
        };
        this.AuthService = authService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map