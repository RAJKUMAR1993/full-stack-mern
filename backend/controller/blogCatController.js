const Category = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");

// create a new product category
const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const categoryCreate = await Category.create(req.body);
    res.json(categoryCreate);
  } catch (error) {
    throw new Error(error);
  }
});

// Update  a  product category
const UpdateProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const UpdateProCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(UpdateProCategory);
    res.json(UpdateProCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// delete  a  product category
const deleteProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteProCategory = await Category.findByIdAndDelete(id);
    res.json(deleteProCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get a product by category

const getProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getProCategory = await Category.findById(id);
    res.json(getProCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get All  products

const getAllProCategory = asyncHandler(async (req, res) => {
  try {
    const getAllProCategory = await Category.find();
    res.json(getAllProCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBlogCategory,
  UpdateProCategory,
  deleteProCategory,
  getProCategory,
  getAllProCategory,
};
