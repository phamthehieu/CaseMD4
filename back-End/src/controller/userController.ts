import {Request, Response} from "express";
import UserService from "../service/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
            console.log(users)
            res.status(200).json(users)
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
        // let username = req['decoded'].userName;
        let id = req.params.id;
        let user = await this.UserService.findUser(id)
        let passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if (!passwordCompare) {
            res.status(403).json({message: 'wrong password'})
        }else {
            let newPassword = await bcrypt.hash(req.body.passwordNew, 10)
            let response = await this.UserService.changePassword(user, newPassword)
            res.status(200).json(response)

        }
    }
}
export default new UserController()