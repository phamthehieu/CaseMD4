"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_soure_1 = require("../data-soure");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.editProfile = async (id, newProfile) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            return this.userRepository.update({ idUser: id }, newProfile);
        };
        this.lock = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                if (user.status === 'open') {
                    return this.userRepository.update({ idUser: id }, { status: 'locked' });
                }
                else {
                    return this.userRepository.update({ idUser: id }, { status: 'open' });
                }
            }
        };
        this.getUser = async () => {
            return this.userRepository.find();
        };
        this.getProfile = async (id) => {
            return this.userRepository.findOneBy({ idUser: id });
        };
        this.changePassword = async (user) => {
            let userfind = await this.userRepository.findOneBy({ userName: user.userName });
            if (!userfind) {
                return "User not found";
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.password, userfind.password);
                if (!passwordCompare) {
                    return 'Password does not match';
                }
                else {
                    let passwordHash = await bcrypt_1.default.hash(user.passwordChange, 10);
                    return await this.userRepository.update({ idUser: userfind.idUser }, passwordHash);
                }
            }
        };
        this.userRepository = data_soure_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map