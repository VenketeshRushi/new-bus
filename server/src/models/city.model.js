const { Schema, model } = require("mongoose");

const CitySchema = new Schema({
  name: String,
  state: String,
});
const CityModel = model("cities", CitySchema);

module.exports = CityModel;
