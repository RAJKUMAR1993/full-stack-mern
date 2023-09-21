const express = require("express");
const {
  createCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");
const router = express.Router();

router.post("/createCoupon", authMiddleware, isAdmin, createCoupon);
router.get("/get-coupons", authMiddleware, isAdmin, getAllCoupon);
router.put("/update-coupon/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/delete-coupon/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
