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
        this.userRepository = data_soure_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map