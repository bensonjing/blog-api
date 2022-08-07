import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/user";

export const signup = [
  body("username")
    .trim()
    .custom((value) => {
      User.findOne({ username: value }, (err, user) => {
        if (err) {
          throw new Error(err);
        }
        if (user) {
          throw new Error("Username already in use");
        }
      });
      return true;
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
    console.log(req.body);
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
