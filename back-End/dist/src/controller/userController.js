"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
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
        this.changePassword = async (req, res) => {
            let id = req.params.id;
            let user = await this.UserService.findUser(id);
            let passwordCompare = await bcrypt_1.default.compare(req.body.password, user.password);
            if (!passwordCompare) {
                res.status(403).json({ message: 'wrong password' });
            }
            else {
                let newPassword = await bcrypt_1.default.hash(req.body.passwordNew, 10);
                let response = await this.UserService.changePassword(user, newPassword);
                res.status(200).json(response);
            }
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map