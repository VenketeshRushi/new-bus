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

app.post("/showcity", async (req, res) => {
  let sourceStr = req.body.source;
  let destinationStr = req.body.destination;
  let source = sourceStr.charAt(0).toUpperCase() + sourceStr.substr(1);
  let destination =
    destinationStr.charAt(0).toUpperCase() + destinationStr.substr(1);
  try {
    let fromcheck= await CityModel.findOne({name:source})
    let destinationcheck=await CityModel.findOne({name:destination})
    console.log(fromcheck)
    console.log(destinationcheck)
    if(fromcheck){
      if(destinationcheck){
        return res.send({status:"success",data:"Buses In Your City Are Here"})
      }else{
        return res.send({status:"failed",data:"destination is not found"})
      }
    }else{
      return res.send({status:"failed",data:"source is not found"})
    }
  } catch (error) {
    return res.send(error.message)
  }
})

module.exports = app;
