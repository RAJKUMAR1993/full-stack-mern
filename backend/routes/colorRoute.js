const express = require("express");
const {
  createColor,
  UpdateColor,
  deleteColor,
  getColor,
  getAllColor,
} = require("../controller/colorController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

// all categories router here
router.post("/create-color", authMiddleware, isAdmin, createColor);
router.put("/update-color/:id", authMiddleware, isAdmin, UpdateColor);
router.delete("/delete-color/:id", authMiddleware, isAdmin, deleteColor);
router.get("/get-color/:id", getColor);
router.get("/all-colors/", getAllColor);

module.exports = router;
