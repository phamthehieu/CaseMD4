import {User} from "../model/user";
import {AppDataSource} from "../data-soure";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    editProfile = async (id, newProfile) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        if (!user) {
            return null;
        }
        return this.userRepository.update({idUser: id}, newProfile);
    }

    lock = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        if (!user) {
            return null;
        }else {
            if (user.status === 'open') {
                return this.userRepository.update({idUser: id}, {status: 'locked'})
            }else {
                return this.userRepository.update({idUser: id}, {status : 'open'})
            }
        }
    }

    getUser = async () => {
        return this.userRepository.find()
    }

    getProfile = async (id) => {
        return this.userRepository.findOneBy({idUser: id})

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

export default new UserService()