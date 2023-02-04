import {Request, Response} from "express";
import UserService from "../service/userService";
class UserController {
    private UserService

    constructor() {
        this.UserService = UserService;
    }

    editUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let editProfile = await this.UserService.editProfile(id, req.body);
        res.status(200).json({
            Message: 'Update user success',
            editProfile
        });
    }

    lockUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let lock = await this.UserService.lock(id);
        res.status(200).json({
            Message: 'Locked',
            lock
        })
    }

    showListUser = async (req: Request, res: Response) => {
        let users = await this.UserService.getUser();
        res.status(200).json({users})
    }

    showProfile = async (req: Request, res: Response) => {
        let id = req.params.id;
        let user = await this.UserService.getProfile(id)
        res.status(200).json({user})
    }

    changePassword = async (req: Request, res: Response) => {
        // let username = req['decoded'].userName;
        let id  = req.params.id;
        // let user = {
        //     userName: username,
        //     password: req.body.password,
        //     newPassword: req.body.newPassword
        // }
        let response = await this.UserService.changePassword(id)
        res.status(200).json(response)

    }
}
export default new UserController()