const express = require("express");

const Order = require("../models/order.model");

// const authorization = require("../../middlewares/authorization");

const app = express.Router();

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const order = await Order.create({ ...req.body });
    return res.status(201).json(order);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error!" });
  }
});

app.get("myticket", async (req, res) => {
  console.log(req.body);
  try {
    const order = await Order.find({ user: req.body.id });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
});

module.exports = app;
