const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadProductImages,
  deleteProductImages,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");
const {
  uploadPhoto,
  productImageReSize,
} = require("../middelwares/uploadImages");
const router = express.Router();

router.post("/createProduct", authMiddleware, isAdmin, createProduct);
router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageReSize,
  uploadProductImages
);
router.get("/getSingleProduct/:id", getProduct);
router.put("/wishList", authMiddleware, addToWishList);
router.put("/rating", authMiddleware, rating);
router.put("/updateProduct/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/deleteProduct/:id", authMiddleware, isAdmin, deleteProduct);
router.delete(
  "/delete-images/:id",
  authMiddleware,
  isAdmin,
  deleteProductImages
);

router.get("/getAllProducts", getAllProduct);

module.exports = router;
