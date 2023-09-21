const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");

//create a New Coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const couponCreate = await Coupon.create(req.body);
    res.json(couponCreate);
  } catch (error) {
    throw new Error(error);
  }
});

//get All Coupons
const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const getAllCoupon = await Coupon.find();
    res.json(getAllCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//updates Coupons
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  console.log(id);
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete Coupons
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  console.log(id);
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { createCoupon, getAllCoupon, updateCoupon, deleteCoupon };
