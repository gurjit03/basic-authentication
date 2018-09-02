const express = require("express");
const passport = require("passport");

const app = express();

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text-html");
  res.setHeader("X-custom", "hello");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});
