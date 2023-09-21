const express = require("express");
const {
  createBlogCategory,
  UpdateProCategory,
  deleteProCategory,
  getProCategory,
  getAllProCategory,
} = require("../controller/blogCatController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

// all categories router here
router.post(
  "/blog-category-create",
  authMiddleware,
  isAdmin,
  createBlogCategory
);
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
