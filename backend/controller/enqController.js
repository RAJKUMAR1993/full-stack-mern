const Enquiry = require("../models/engModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");

// create a new product Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const EnquiryCreate = await Enquiry.create(req.body);
    res.json(EnquiryCreate);
  } catch (error) {
    throw new Error(error);
  }
});

// Update  a  product Brand
const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const UpdateProBrand = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(UpdateProBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// deleteEnquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(deleteEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//get    Enquiry

const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getEnquiry = await Enquiry.findById(id);
    res.json(getEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//get All  Enquiry

const getAllEnquiry = asyncHandler(async (req, res) => {
  try {
    const getAllEnquiry = await Enquiry.find();
    res.json(getAllEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiry,
};
