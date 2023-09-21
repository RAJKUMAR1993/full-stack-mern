const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    console.log("token:", token);
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.jsonWebTokenKey);
        const user = await User.findById(decoded?.id);
        console.log("user:", user);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized token expired : Please Login again");
    }
  } else {
    throw new Error("There is no authorization header");
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser == "admin") {
    throw new Error("Your not a Admin");
  } else {
    next();
  }
});
module.exports = { authMiddleware, isAdmin };
