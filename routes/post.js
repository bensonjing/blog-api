import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.send("NOT IMPLEMENTED: List of posts"));

router.get("/:postId", (req, res) =>
  res.send("NOT IMPLEMENTED: post detail: " + req.params.postId)
);

router.post("/", (req, res) => res.send("NOT IMPLEMENTED: create post"));

router.put("/:postId", (req, res) =>
  res.send("NOT IMPLEMENTED: update post: " + req.params.postId)
);

router.delete("/:postId", (req, res) => {
  res.send("NOT IMPLEMENTED: delete post: " + req.params.postId);
});

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
