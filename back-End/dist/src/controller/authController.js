"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../service/authService"));
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let user = await this.AuthService.register(req.body);
                res.status(201).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.login = async (req, res) => {
            try {
                let response = await this.AuthService.checkUser(req.body);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.AuthService = authService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map