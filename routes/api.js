import express from "express";
const router = express.Router();

import postRouter from "./post";
import * as userController from "../controllers/userController";

router.get("/", (req, res) => {
  res.redirect("/api/posts");
});

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

router.use("/posts", postRouter);

export default router;
