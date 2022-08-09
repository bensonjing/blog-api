import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import passport from "passport";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const signup = [
  body("username")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ username: value });
        if (user) {
          throw new Error("Sign up failed: Username already exists!");
        }
      } catch (err) {
        throw new Error(err);
      }
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must not be less than 6 characters"),
  body("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.json({
        errors: errors.array(),
      });
    }

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) {
        return next(err);
      }

      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });

      user.save((err) => {
        if (err) {
          return next(err);
        }
      });

      res.json({
        message: "Sign Up success",
      });
    });
  },
];

export function login(req, res, next) {
  passport.authenticate("login", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info.message || "An error occurred",
        user: user,
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      console.log(user);

      const token = jwt.sign({ user }, "secrete_key");
      res.json({ token });
    });
  })(req, res, next);
}
