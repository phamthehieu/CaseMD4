"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.editUser = async (req, res) => {
            try {
                let id = req.params.id;
                let editProfile = await this.UserService.editProfile(id, req.body);
                res.status(200).json({
                    Message: 'Update user success',
                    editProfile
                });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.lockUser = async (req, res) => {
            try {
                let id = req.params.id;
                let lock = await this.UserService.lock(id);
                res.status(200).json({
                    Message: 'Locked',
                    lock
                });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showListUser = async (req, res) => {
            try {
                let users = await this.UserService.getUser();
                res.status(200).json({ users });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showProfile = async (req, res) => {
            try {
                let id = req.params.id;
                let user = await this.UserService.getProfile(id);
                res.status(200).json({ user });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.changePassword = async (req, res) => {
            try {
                let username = req['decoded'].userName;
                let user = {
                    userName: username,
                    password: req.body.password,
                    newPassword: req.body.newPassword
                };
                let response = await this.UserService.changePassword(user);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map