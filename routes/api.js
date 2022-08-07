import express from "express";
const router = express.Router();

import postRouter from "./post";

router.get("/login", (req, res) => res.send("NOT IMPLEMENTED: login GET"));

router.post("/login", (req, res) => res.send("NOT IMPLEMENTED: login POST"));

router.get("/logout", (req, res) => res.send("NOT IMPLEMENTED: logout GET"));

router.get("/sign-up", (req, res) => res.send("NOT IMPLEMENTED: sign up GET"));

router.post("/sign-up", (req, res) =>
  res.send("NOT IMPLEMENTED: sign up POST")
);

router.use("/posts", postRouter);

export default router;
