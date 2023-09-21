const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiry,
} = require("../controller/enqController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

// all categories router here
router.post("/create-enquiry", createEnquiry);
router.put("/update-enquiry/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/delete-enquiry/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/get-enquiry/:id", getEnquiry);
router.get("/all-enquiry/", getAllEnquiry);

module.exports = router;
