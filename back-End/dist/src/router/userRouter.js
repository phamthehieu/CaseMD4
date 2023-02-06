"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const userController_2 = __importDefault(require("../controller/userController"));
const checkRole_1 = require("../middleware/checkRole");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.put('/edit/:id', userController_1.default.editUser);
exports.userRouter.post('/lock/:id', checkRole_1.checkRole, userController_1.default.lockUser);
exports.userRouter.get('/list-user', checkRole_1.checkRole, userController_2.default.showListUser);
exports.userRouter.get('/profile/:id', userController_2.default.showProfile);
exports.userRouter.put('/changePassword/:id', userController_2.default.changePassword);
//# sourceMappingURL=userRouter.js.map