"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/studentRegister", user_controller_1.createStudentUser);
exports.userRouter.post("/instructorRegister", user_controller_1.createInstructorUser);
exports.userRouter.post("/studentLogin", user_controller_1.studentLogin);
exports.userRouter.post("/instructorLogin", user_controller_1.instructorLogin);
exports.userRouter.get("/logout", user_controller_1.logout);
