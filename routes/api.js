import express from "express";
const router = express.Router();

import postRouter from "./post";
import * as userController from "../controllers/userController";

router.post("/signup", userController.signup);

router.post("/login", (req, res) => res.send("NOT IMPLEMENTED: login"));

router.get("/logout", (req, res) => res.send("NOT IMPLEMENTED: logout"));

router.use("/posts", postRouter);

export default router;
