import {Request, Response} from "express";
import AuthService from "../service/authService";
class AuthController {
    private AuthService

    constructor() {
        this.AuthService = AuthService;
    }

    register = async (req, res) => {
        let user = await this.AuthService.register(req.body)
        res.status(201).json(user)
    }

    login = async (req: Request, res: Response) => {
        let response = await this.AuthService.checkUser(req.body)
        // console.log(response)
        res.status(200).json(response)
    }
}
export default new AuthController()