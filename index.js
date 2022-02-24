// Import packages
const express = require("express");
const morgan = require("morgan");
const data = require("./data.json");

// App
const app = express();
// Morgan
app.use(morgan("tiny"));
// First route
app.get("/phones", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(data);
});

app.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  res.json(phoneId);
});

// Starting server
app.listen("5005");
