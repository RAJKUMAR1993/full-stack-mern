const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
  likeBlog,
  disLikeBlog,
  uploadBlogImages,
} = require("../controller/blogController");
const router = express.Router();
const { uploadPhoto, blogImageReSize } = require("../middelwares/uploadImages");
const { isAdmin, authMiddleware } = require("../middelwares/authMiddelware");

//all routes define to  the here
router.post("/create-blog", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImageReSize,
  uploadBlogImages
);
router.put("/like", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, disLikeBlog);
router.get("/getAllBlogs", getAllBlog);
router.put("/update-blog/:id", authMiddleware, isAdmin, updateBlog);
router.get("/getBlog/:id", getBlog);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
