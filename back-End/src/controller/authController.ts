import {Request, Response} from "express";
import AuthService from "../service/authService";
import categoryService from "../service/categoryService";
class AuthController {
    private AuthService
    constructor() {
        this.AuthService = AuthService;
    }
    register = async (req, res) => {
        try {
            let user = await this.AuthService.register(req.body)
            res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            let response = await this.AuthService.checkUser(req.body)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new AuthController()