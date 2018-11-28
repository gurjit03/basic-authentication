const express = require("express");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  // res.setHeader("X-custom", "hello");
  res.send("<title>THIS IS CURRENTLY THE INDEX PAGE");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT : ${PORT}`);
});
