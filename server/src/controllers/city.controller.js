const express = require("express");

const app = express.Router();

app.get("/", async (req, res) => {
  console.log(req.body);
});

app.post("/", async (req, res) => {
  console.log(req.body);
});

module.exports = app;
