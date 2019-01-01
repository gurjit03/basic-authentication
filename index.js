const express = require("express");
const hbs = require("express-hbs");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: path.join(__dirname, "/views/partials"),
    layoutsDir: path.join(__dirname, "/views/layouts"),
    defaultLayout: path.join(path.resolve(), "/views/layouts/default.hbs")
  })
);

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  // res.setHeader("X-custom", "hello");
  res.render("index", {
    userName: "gurjit",
    layout: "default"
  });
  // res.send("<title>THIS IS CURRENTLY THE INDEX PAGE</title>");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT : ${PORT}`);
});
