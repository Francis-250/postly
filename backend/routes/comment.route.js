import { Router } from "express";
import {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
} from "../controller/comment.controller.js";
import { verifyToken } from "../middleware/verify.token.js";

const commentRouter = Router();

commentRouter.post("/:postId", verifyToken, createComment);
commentRouter.get("/:postId", getCommentsByPost);
commentRouter.put("/:id", verifyToken, updateComment);
commentRouter.delete("/:id", verifyToken, deleteComment);

export default commentRouter;
