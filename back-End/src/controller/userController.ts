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
}
export default new UserController()