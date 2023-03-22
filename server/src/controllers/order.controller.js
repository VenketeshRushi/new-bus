const express = require("express");
const BusModel = require("../models/bus.model");

const Order = require("../models/order.model");

const app = express.Router();

app.post("/", async (req, res) => {
  console.log("body", req.body);
  try {
    const order = await Order.create({ ...req.body });
    let ticketdata =
      req.body.ticketSummary.date +
      "@" +
      req.body.ticketSummary.ticket +
      "@" +
      req.body.userDetails.gender;
    console.log(ticketdata);
    let filter = { _id: req.body.bus };
    let update = { $push: { seats: ticketdata } };
    const busUpdate = await BusModel.findOneAndUpdate(filter, update);
    return res.status(201).json(order);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error!" });
  }
});

app.post("/myticket", async (req, res) => {
  try {
    const order = await Order.find({ user: req.body.id });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
});

app.delete("/oneorder/:id", async (req, res) => {
  let id = req.params.id.split(":")[1];
  console.log(id);
  try {
    const order = await Order.findOneAndDelete({ user: id });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
});

module.exports = app;
