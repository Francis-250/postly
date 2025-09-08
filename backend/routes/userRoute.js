import { Router } from "express";
import { register, login } from "../controller/userController.js";
import { removeCookie } from "../middleware/verify.token.js";

const userRouter = Router();

userRouter.route("/register").post(register);
userRouter.post("/login", login);
userRouter.post("/", removeCookie);

export default userRouter;
