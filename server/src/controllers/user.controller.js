const express = require("express");
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

module.exports = app;
