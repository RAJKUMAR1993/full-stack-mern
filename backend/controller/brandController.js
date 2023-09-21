const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");

// create a new product Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const BrandCreate = await Brand.create(req.body);
    res.json(BrandCreate);
  } catch (error) {
    throw new Error(error);
  }
});

// Update  a  product Brand
const UpdateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const UpdateProBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(UpdateProBrand);
    res.json(UpdateProBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// deleteBrand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.json(deleteBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get a product by Brand

const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBrand = await Brand.findById(id);
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get All  Brand

const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getAllBrand = await Brand.find();
    res.json(getAllBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  UpdateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
};
