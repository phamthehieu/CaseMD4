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
        } else {
            if (user.status === 'open') {
                return this.userRepository.update({idUser: id}, {status: 'locked'})
            } else {
                return this.userRepository.update({idUser: id}, {status: 'open'})
            }
        }
    }

    getUser = async () => {
        return this.userRepository.find()
    }

    getProfile = async (id) => {
        return this.userRepository.findOneBy({idUser: id})

    }

    findUser = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        if (!user) {
            return null;
        }else{
            return user
        }
    }

    changePassword = async (user, newPass) => {
            return await this.userRepository.update({idUser: user.idUser}, {password:newPass})
    }
}

export default new UserService()