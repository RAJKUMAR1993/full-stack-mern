const express = require("express");
const {
  createProCategory,
  UpdateProCategory,
  deleteProCategory,
  getProCategory,
  getAllProCategory,
} = require("../controller/productCategoryController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

// all categories router here
router.post("/category-create", authMiddleware, isAdmin, createProCategory);
router.put("/category-update/:id", authMiddleware, isAdmin, UpdateProCategory);
router.delete(
  "/category-delete/:id",
  authMiddleware,
  isAdmin,
  deleteProCategory
);
router.get("/get-category/:id", getProCategory);
router.get("/get-All-category/", getAllProCategory);

module.exports = router;
