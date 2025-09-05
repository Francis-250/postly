import Comment from "../models/comment.model.js";

export const createComment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateComment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
