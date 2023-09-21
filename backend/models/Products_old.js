const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true,
  },
  // discountPrice: {
  //   type: "string",
  //   required: true,
  //   //maxLength: [4, "Description is can not exceed 4 characters"],
  // },
  color: {
    type: "string",
  },
  // size: {
  //   type: "string",
  // },
  // ratings: {
  //   type: "string",
  //   default: 0,
  // },
  brand: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
    //maxLength: [4000, "Description is can not exceed 4000 characters"],
  },
  images: [
    {
      public_id: {
        type: "string",
        required: true,
      },
      url: {
        type: "string",
        required: true,
      },
    },
  ],
  category: {
    type: "string",
    required: true,
  },
  stock: {
    type: "number",
    required: true,
    //maxLength: [3, "stock is can not exceed 3 characters"],
  },
  // numOfReviews: {
  //   type: "string",
  //   default: 0,
  // },
  // reviews: [
  //   {
  //     user: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  //     name: {
  //       type: "string",
  //       required: true,
  //     },
  //     rating: {
  //       type: "number",
  //       required: true,
  //     },
  //     comment: {
  //       type: "string",
  //     },
  //     time: {
  //       type: Date,
  //       default: Date.now(),
  //     },
  //   },
  // ],
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   //   required: true
  // },
  // createAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

const ProductsModel = mongoose.model("products", ProductsSchema);
module.exports = ProductsModel;
