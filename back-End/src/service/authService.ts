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
            console.log(userCheck)
            if (!userCheck ) {
                return "User not found"
            } else {
                if (userCheck.status === 'locked') {
                    return "User is already locked"
                }else {
                    let passwordCompare = await bcrypt.compare(user.password, userCheck.password)
                    console.log(passwordCompare)
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
}

export default new AuthService()