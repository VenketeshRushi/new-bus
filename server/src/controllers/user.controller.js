const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const app = express.Router();

app.post("/signup", async (req, res) => {
  let { email } = req.body;

  try {
    let user = await UserModel.findOne({ email: email });

    if (user) {
      return res.send({
        status: "Failed",
        message: "Please try with different email",
      });
    }
    user = await UserModel.create(req.body);

    return res.send({
      status: "Success",
      message: "Signup Successful",
    });
  } catch (error) {
    return res.send({ message: error.message, status: "Failed" });
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  // console.log(req.body);
  try {
    let user = await UserModel.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.send({ status: "Failed", message: "Please check your email" });
    }
    if (user.password !== password) {
      return res.send({
        status: "Failed",
        message: "Please check your password",
      });
    }
    if (user && user.password === password) {
      const token = jwt.sign({ user }, "1234");
      return res.send({ status: "Success", message: { user, token } });
    }
  } catch (error) {
    return res.send({ message: error.message, status: "Failed" });
  }
});

module.exports = app;
