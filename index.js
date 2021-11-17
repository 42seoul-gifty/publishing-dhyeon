var express = require("express");
var path = require("path");
var app = express();
const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, "static")))
  .get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  })
  .get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  })
  .get("/main.html", function (req, res) {
    res.sendFile(__dirname + "/main.html");
  })
  .get("/present-1.html", function (req, res) {
    res.sendFile(__dirname + "/present-1.html");
  })
  .get("/present-2.html", function (req, res) {
    res.sendFile(__dirname + "/present-2.html");
  })
  .get("/present-3.html", function (req, res) {
    res.sendFile(__dirname + "/present-3.html");
  })
  .get("/present-4.html", function (req, res) {
    res.sendFile(__dirname + "/present-4.html");
  })
  .get("/present-4-1.html", function (req, res) {
    res.sendFile(__dirname + "/present-4-1.html");
  })
  .get("/present-4-2.html", function (req, res) {
    res.sendFile(__dirname + "/present-4-2.html");
  })
  .get("/present-5.html", function (req, res) {
    res.sendFile(__dirname + "/present-5.html");
  })
  .get("/present-5-1.html", function (req, res) {
    res.sendFile(__dirname + "/present-5-1.html");
  })
  .get("/present-6.html", function (req, res) {
    res.sendFile(__dirname + "/present-6.html");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
