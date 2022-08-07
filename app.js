var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// setup mongoDB connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
