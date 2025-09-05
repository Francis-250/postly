import { Router } from "express";
import { register, login } from "../controller/user.controller.js";
import { removeCookie } from "../middleware/verify.token.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/", removeCookie);

export default userRouter;
