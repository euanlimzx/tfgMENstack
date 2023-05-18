const path = require("path");
const ejsMate = require("ejs-mate");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.render("nav/homepage.ejs");
});

app.get("/competition", (req, res) => {
  res.render("nav/competition.ejs");
});

app.listen(8080, () => {
  console.log("listening!");
});
