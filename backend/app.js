import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieparser());
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
