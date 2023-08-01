// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://raman:raman@cluster0.fm7rpoi.mongodb.net/ecom",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


