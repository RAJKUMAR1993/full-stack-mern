const express = require("express");
const {
  createUser,
  userLogin,
  allUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  userBlocked,
  userUnBlocked,
  handleRefreshTOken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  userAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middelwares/authMiddelware.js");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", userLogin);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.put("/updatePassword", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
router.get("/all-users", allUsers);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.get("/refreshToken", handleRefreshTOken);
router.get("/logout", logout);
router.get("/get-user/:id", authMiddleware, isAdmin, getSingleUser);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/get-cart", authMiddleware, getUserCart);
router.put("/update-user/:id", authMiddleware, updateUser);
router.put("/save-address/", authMiddleware, userAddress);
router.put("/save-address/", authMiddleware, userAddress);
router.delete("/delete-user/:id", deleteUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put("/block-user/:id", authMiddleware, isAdmin, userBlocked);
router.put("/unBlock-user/:id", authMiddleware, isAdmin, userUnBlocked);

module.exports = router;
