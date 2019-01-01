const express = require("express");
const hbs = require("express-hbs");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: path.join(__dirname, "/views/partials"),
    defaultLayout: path.resolve(__dirname, "/views/layout.hbs")
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  // res.setHeader("X-custom", "hello");
  res.render("index.hbs", {});
  // res.send("<title>THIS IS CURRENTLY THE INDEX PAGE</title>");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT : ${PORT}`);
});
