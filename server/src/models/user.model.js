const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  gender: String,
});
const UserModel = model("userss", UserSchema);

module.exports = UserModel;
