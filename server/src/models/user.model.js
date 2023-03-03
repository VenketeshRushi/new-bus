const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
});
const UserModel = model("users", UserSchema);

module.exports = UserModel;
