"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.editUser = async (req, res) => {
            let id = req.params.id;
            let editProfile = await this.UserService.editProfile(id, req.body);
            res.status(200).json({
                Message: 'Update user success',
                editProfile
            });
        };
        this.lockUser = async (req, res) => {
            let id = req.params.id;
            let lock = await this.UserService.lock(id);
            res.status(200).json({
                Message: 'Locked',
                lock
            });
        };
        this.showListUser = async (req, res) => {
            let users = await this.UserService.getUser();
            res.status(200).json({ users });
        };
        this.showProfile = async (req, res) => {
            let id = req.params.id;
            let user = await this.UserService.getProfile(id);
            res.status(200).json({ user });
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map