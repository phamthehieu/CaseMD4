"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_soure_1 = require("../data-soure");
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
        this.findUser = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                return user;
            }
        };
        this.changePassword = async (user, newPass) => {
            return await this.userRepository.update({ idUser: user.idUser }, { password: newPass });
        };
        this.userRepository = data_soure_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map