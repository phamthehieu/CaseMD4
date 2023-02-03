import {User} from "../model/user";
import {AppDataSource} from "../data-soure";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class AuthService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user) => {
        user.password = await bcrypt.hash (user.password, 10)
        return this.userRepository.save(user)
    }

    checkUser = async (user) => {
        try {
            let userCheck = await this.userRepository.findOneBy({userName: user.userName})
            if (!userCheck) {
                return "User not found"
            } else {
                let passwordCompare = await bcrypt.compare(user.password, userCheck.password)
                if (userCheck.status === 'locked') {
                    return "User is already locked"
                }else {
                    let passwordCompare = await bcrypt.compare(user.password, userCheck.password)
                    if (!passwordCompare) {
                        return 'Password does not match'
                    }else {
                        let payload = {
                            idUser: userCheck.idUser,
                            userName: userCheck.userName,
                            role: userCheck.role
                        }
                        const token = jwt.sign(payload, SECRET, {
                            expiresIn: 36000
                        })
                        const check = {
                            token: token,
                            idUser: userCheck.idUser,
                            userName: userCheck.username,
                            role: userCheck.role
                        }
                        return check;
                    }
                }
            }
        }catch (e) {
            console.log(e.message)
        }

    }

    changePassword = async (user) => {
        let userfind = await this.userRepository.findOneBy({userName: user.userName})
        if (!userfind) {
            return "User not found"
        } else {
            let passwordCompare = await bcrypt.compare(user.password, userfind.password)
            if (!passwordCompare) {
                return 'Password does not match'
            } else {
                let passwordHash = await bcrypt.hash(user.passwordChange, 10)
                return await this.userRepository.update({idUser: userfind.idUser}, passwordHash)
            }
        }
    }
}

export default new AuthService()