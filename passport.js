import passport from "passport";
import LocalStrategy from "passport-local";
import passportJWT from "passport-jwt";
import bcrypt from "bcryptjs";
import "dotenv/config";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

import User from "./models/user";

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    });
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETE_KEY,
    },
    (jwtPayload, done) => {
      User.findById(jwtPayload.user._id, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, "Incorrect token");
        }
        return done(null, user);
      });
    }
  )
);
