import express from "express";
import passport from "passport";
const router = express.Router();

import * as postController from "../controllers/postController";

router.get("/", postController.post_list);

router.get("/:postId", postController.post_detail);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.create_post
);

router.put("/:postId", postController.update_post);

router.delete("/:postId", postController.delete_post);

router.get("/:postId/comments", (req, res) =>
  res.send("NOT IMPLEMENTED: list of comments")
);

router.get("/:postId/comments/:commentId", (req, res) =>
  res.send("NOT IMPLEMENTED: comment detail: " + req.params.commentId)
);

router.post("/:postId/comments", (req, res) =>
  res.send("NOT IMPLEMENTED: create comment")
);

router.put("/:postId/comments/:commentId", (req, res) =>
  res.send("NOT IMPLEMENTED: update comment: " + req.params.commentId)
);

router.delete("/:postId/comments/:commentId", (req, res) =>
  res.send("NOT IMPLEMENTED: delete comment: " + req.params.commentId)
);
export default router;
