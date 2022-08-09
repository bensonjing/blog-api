var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";

import "./passport";
import indexRouter from "./routes/index";
import apiRouter from "./routes/api";

// setup mongoDB connection
const mongoDB =
  process.env.MONGODB_URI ||
  "mongodb+srv://BensonJing:Benson0523@cluster0.t7du9kk.mongodb.net/blog?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;
