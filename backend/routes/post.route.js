import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controller/post.controller.js";
import { verifyToken } from "../middleware/verify.token.js";

const postRouter = Router();

postRouter.post("/", verifyToken, createPost);
postRouter.get("/", getPosts);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", verifyToken, updatePost);
postRouter.delete("/:id", verifyToken, deletePost);

export default postRouter;
