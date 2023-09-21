const express = require("express");
const {
  createBrand,
  UpdateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controller/brandController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

// all categories router here
router.post("/create-brand", authMiddleware, isAdmin, createBrand);
router.put("/update-brand/:id", authMiddleware, isAdmin, UpdateBrand);
router.delete("/delete-brand/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/get-brand/:id", getBrand);
router.get("/all-brands", getAllBrand);

module.exports = router;
