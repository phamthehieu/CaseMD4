"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const authRouter_1 = require("./authRouter");
const userRouter_1 = require("./userRouter");
const transactionRouter_1 = require("./transactionRouter");
const categoryRouter_1 = require("./categoryRouter");
const walletRouter_1 = require("./walletRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', authRouter_1.authRouter);
exports.router.use(auth_1.auth);
exports.router.use('/user', userRouter_1.userRouter);
exports.router.use('/transactions', transactionRouter_1.transactionRouter);
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/wallet', walletRouter_1.walletRouter);
//# sourceMappingURL=router.js.map