import express from "express";
const router = express.Router();

router.get("/posts", (req, res) => res.send("NOT IMPLEMENTED: List of posts"));

router.get("/posts/:postId", (req, res) =>
  res.send("NOT IMPLEMENTED: post detail: " + req.params.postId)
);

router.post("/posts", (req, res) => res.send("NOT IMPLEMENTED: create post"));

router.put("/posts/:postId", (req, res) =>
  res.send("NOT IMPLEMENTED: update post: " + req.params.postId)
);

router.delete("/posts/:postId", (req, res) => {
  res.send("NOT IMPLEMENTED: delete post: " + req.params.postId);
});

router.get("/login", (req, res) => res.send("NOT IMPLEMENTED: login GET"));

router.post("/login", (req, res) => res.send("NOT IMPLEMENTED: login POST"));

router.get("/logout", (req, res) => res.send("NOT IMPLEMENTED: logout GET"));

router.get("/sign-up", (req, res) => res.send("NOT IMPLEMENTED: sign up GET"));

router.post("/sign-up", (req, res) =>
  res.send("NOT IMPLEMENTED: sign up POST")
);

export default router;
