import express from "express";
import passport from "passport";
const router = express.Router();

import * as postController from "../controllers/postController";
import * as commentController from "../controllers/commentController";

router.get("/", postController.post_list);

router.get("/:postId", postController.post_detail);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.create_post
);

router.put("/:postId", postController.update_post);

router.delete("/:postId", postController.delete_post);

router.get("/:postId/comments", commentController.comment_list);

router.get("/:postId/comments/:commentId", commentController.comment_detail);

router.post("/:postId/comments", commentController.create_comment);

router.put("/:postId/comments/:commentId", commentController.update_comment);

router.delete("/:postId/comments/:commentId", commentController.delete_comment);

export default router;
