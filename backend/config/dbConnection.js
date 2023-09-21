const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/myEcomm");
    console.log("Database Connected");
  } catch (error) {
    console.log("connection Failed");
  }
};

module.exports = dbConnect;
