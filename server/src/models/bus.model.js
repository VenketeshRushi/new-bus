const { Schema, model } = require("mongoose");

const BusSchema = new Schema({
  companyname: String,
  from: String,
  to: String,
  price: Number,
  email: String,
  phone: Number,
  aminites1:{ type: String, enum: ["AC", "NON-AC"], default: "AC" },
  aminites2:{ type: String, enum: ["SEATER", "SLEEPER"], default: "SLEEPER" },
  rating: Number,
  arrival: String,
  departure: String,
});

const BusModel = model("busses", BusSchema);

module.exports = BusModel;