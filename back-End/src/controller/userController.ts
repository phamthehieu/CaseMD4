import {Request, Response} from "express";
import UserService from "../service/userService";
class UserController {
    private UserService

    constructor() {
        this.UserService = UserService;
    }

    editUser = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let editProfile = await this.UserService.editProfile(id, req.body);
            res.status(200).json({
                Message: 'Update user success',
                editProfile
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    lockUser = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let lock = await this.UserService.lock(id);
            res.status(200).json({
                Message: 'Locked',
                lock
            })
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    showListUser = async (req: Request, res: Response) => {
        try {
            let users = await this.UserService.getUser();
            res.status(200).json({users})
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    showProfile = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let user = await this.UserService.getProfile(id)
            res.status(200).json({user})
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    changePassword = async (req: Request, res: Response) => {
        try {
            let username = req['decoded'].userName;
            let user = {
                userName: username,
                password: req.body.password,
                newPassword: req.body.newPassword
            }
            let response = await this.UserService.changePassword(user)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new UserController()