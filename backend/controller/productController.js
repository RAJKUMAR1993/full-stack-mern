const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utills/validatemongodbID");
const {
  cloudinaryUploadingImg,
  cloudinaryDeleteImg,
} = require("../utills/cloudinary");
const fs = require("fs");
//create products

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const createProduct = await Product.create(req.body);
    res.json({ createProduct });
  } catch (error) {
    throw new Error(error);
  }
});

// get single product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findById(id);
    res.json({ getProduct });
  } catch (error) {
    throw new Error(error);
  }
});

// get All products && filter & Sort by category and price & limiting the fields & page nation
const getAllProduct = asyncHandler(async (req, res, next) => {
  try {
    //filter products by category and price string
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((ele) => delete queryObj[ele]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));

    //Sort by category and price
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query - query.select(fields);
    } else {
      query = query.select("-__v");
    }
    //filter products by category and price End

    // page nation
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This page does not exits");
    }

    //page nation
    const getallProducts = await query;
    res.json(getallProducts);

    //
  } catch (error) {
    throw new Error(error);
  }
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// add to wishList Product

const addToWishList = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { productId } = req.body;

  try {
    const user = await User.findById(id);
    const alreadyAddToWishList = user.wishlist.find(
      (id) => id.toString() === productId
    );
    // console.log(alreadyAddToWishList, "user");
    if (alreadyAddToWishList) {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $pull: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $push: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//rating product list

const rating = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { star, comments, productId } = req.body;

  try {
    const product = await Product.findById(productId);
    const alreadyRatings = product.ratings.find(
      (userId) => userId.postedby.toString() === id.toString()
    );

    if (alreadyRatings) {
      const updateRating = await Product.updateOne(
        { ratings: { $elemMatch: alreadyRatings } },
        { $set: { "ratings.$.star": star, "ratings.$.comments": comments } },
        { new: true }
      );

      res.json(updateRating);
    } else {
      const ratePosted = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comments: comments,
              postedby: id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    // count Total Ratings
    const getAllRatings = await Product.findById(productId);

    const totalRatings = getAllRatings.ratings.length;

    //rating total sum
    const totalRatingSum = getAllRatings.ratings
      .map((startRating) => startRating.star)
      .reduce((prev, curr) => prev + curr, 0);

    let actualRatings = Math.round(totalRatingSum / totalRatings);

    //update rating total sum
    let finalAllRatings = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: actualRatings,
      },
      {
        new: true,
      }
    );
    console.log(actualRatings, "ratings by all counted products");
    res.status(200).json({ finalAllRatings, message: "ok" });
  } catch (error) {
    throw new Error(error);
  }
});

//product upload  images
const uploadProductImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadingImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });

    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

//delete images

const deleteProductImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleted = (path) => cloudinaryDeleteImg(id, "images");

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadProductImages,
  deleteProductImages,
};
