const jwt = require("jsonwebtoken");
const jsonWebTokenKey = "richDotCom";
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.jsonWebTokenKey, { expiresIn: "1d" });
};

module.exports = { generateToken };
