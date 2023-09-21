const jwt = require("jsonwebtoken");
//const jsonWebTokenKey = "richDotCom";
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.jsonWebTokenKey, { expiresIn: "1d" });
};

module.exports = { generateRefreshToken };
