const express = require("express");
const CityModel = require("../models/city.model");

const app = express.Router();

app.get("/", async (req, res) => {
  console.log(req.body);
  let data = await CityModel.find({});
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body)
  try {
    let q;
    if(req.body.destination){
      q=req.body.destination
    }else{
      q = req.body.source;
    }

    q = q.toUpperCase();
    console.log(q);
    let data = await CityModel.find();

    let city = data.filter((ele) => {
      return ele.name.toUpperCase().includes(q);
    });

    console.log(city);

    return res.send(city);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
