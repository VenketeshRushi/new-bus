const { Schema, model } = require("mongoose");

const CitySchema = new Schema(
  {
    title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const CityModel = model("CitySchema", CitySchema);

module.exports = CityModel;
