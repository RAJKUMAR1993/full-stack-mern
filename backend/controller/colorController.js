const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");

// create a new product Color
const createColor = asyncHandler(async (req, res) => {
  try {
    const ColorCreate = await Color.create(req.body);
    res.json(ColorCreate);
  } catch (error) {
    throw new Error(error);
  }
});

// Update  a  product Color
const UpdateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const UpdateProColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(UpdateProColor);
    res.json(UpdateProColor);
  } catch (error) {
    throw new Error(error);
  }
});

// deleteColor
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteColor = await Color.findByIdAndDelete(id);
    res.json(deleteColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get a product by Color

const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getColor = await Color.findById(id);
    res.json(getColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get All  Color

const getAllColor = asyncHandler(async (req, res) => {
  try {
    const getAllColor = await Color.find();
    res.json(getAllColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  UpdateColor,
  deleteColor,
  getColor,
  getAllColor,
};
