const { Schema, model } = require("mongoose");

const BusSchema = new Schema({
  companyname: String,
  from: String,
  to: String,
  price: Number,
  email: String,
  phone: Number,
  aminites:Array,
  rating: Number,
  arrival: String,
  departure: String,
  seats:Map,
});

const BusModel = model("busses", BusSchema);

module.exports = BusModel;