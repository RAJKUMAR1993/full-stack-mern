const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const Coupon = require("../models/couponModel");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utills/validatemongodbID");
const { generateRefreshToken } = require("../config/refreshtoken");
const jwt = require("jsonwebtoken");
const uniqid = require("uniqid");
const crypto = require("crypto");
const sendMailer = require("./emailController");

// create A new User
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  // check user is already
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User already exists");
  }
});

//User Login Process Request

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //if user  is already exist or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?.id);
    const userUpdate = await User.findByIdAndUpdate(
      findUser.id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser.id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser.email,
      password: findUser?.password,
      token: generateToken(findUser._id),
    });
  } else {
    throw new Error("Invalid UserName and Password");
  }
});

//Admin Login Process Request

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //if user  is already exist or not
  const findAdmin = await User.findOne({ email });
  // if (findAdmin !== "admin") {
  //   throw new Error("Not Authorised");
  // }
  console.log(findAdmin.role);
  if (!findAdmin.role == "admin") throw new Error("Not Authorised");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?.id);
    const userUpdate = await User.findByIdAndUpdate(
      findAdmin.id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin.id,
      firstName: findAdmin?.firstName,
      lastName: findAdmin?.lastName,
      email: findAdmin.email,
      password: findAdmin?.password,
      token: generateToken(findAdmin._id),
    });
  } else {
    throw new Error("Invalid UserName and Password");
  }
});

// save user Address

const userAddress = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const userUpdate = await User.findByIdAndUpdate(
      id,
      {
        address: req.body?.address,
      },
      {
        new: true,
      }
    );
    res.json(userUpdate);
  } catch (error) {
    throw new Error(error);
  }
});

// get all users

const allUsers = asyncHandler(async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.json(getAllUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// get a single user
const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id);
    const singleUser = await User.findById(id);
    res.json(singleUser);
  } catch (error) {
    throw new Error(error);
  }
});
//refresh Token handle

const handleRefreshTOken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie.refreshToken)
    throw new Error("Refresh token not available  cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user)
    throw new Error("No Refresh token present  in Database or not matched ");
  jwt.verify(refreshToken, process.env.jsonWebTokenKey, (err, decode) => {
    if (err || user.id !== decode.id) {
      throw new Error("There was something wrong refresh token");
    }
    const accessToken = generateToken(user._id);

    res.json(accessToken);
  });
});

//LogOut handle refresh

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.refreshToken)
    throw new Error("Refresh token not available  cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }
  await User.findByIdAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});

//update user
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const userUpdate = await User.findByIdAndUpdate(
      id,
      {
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
        email: req.body?.email,
        mobile: req.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(userUpdate);
  } catch (error) {
    throw new Error(error);
  }
});

// delate a user
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id);
    const delUser = await User.findByIdAndDelete(id);
    res.json(delUser);
  } catch (error) {
    throw new Error(error);
  }
});
//blocked a user
const userBlocked = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id);
    const blocked = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json({
      message: "user Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});
//Unblocked a user
const userUnBlocked = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id);
    const unBlock = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({
      message: "user unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// update password
const updatePassword = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { password } = req.body;
  validateMongoDbId(id);
  const user = await User.findById(id);

  if (password) {
    user.password = password;
    const updatePassword = await user.save();

    res.json(updatePassword);
  } else {
    res.json(user);
  }
});
// user forgot password Token

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found this email ");
  try {
    const token = await user.createPasswordResetToken();

    await user.save();
    const resetUrl = `Hi, Please fellow this link to reset your password. this link is valid till 10 Minutes from  now. <a href='http://localhost:4000/api/user/reset-password/${token}'>Click here</a>`;
    const data = {
      to: email,
      text: `Hey ${email}`,
      subject: "Forgot Password Link Here please click ",
      htm: resetUrl,
    };
    // console.log(data);
    sendMailer(data);
    res.json(data);
    console.log("User mail sent successfully");
  } catch (error) {
    console.log("Something Error showing", error);
    throw new Error(error);
  }
});

// reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordRestToken: hashToken,

    passwordRestExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error("Token has Expired, please try again later");
  user.password = password;
  user.passwordRestExpires = undefined;
  user.passwordRestToken = undefined;
  await user.save();
  res.json(user);
});

// get wish List

const getWishList = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const findUser = await User.findById(id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

//user Cart Add

const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { id } = req.user;
  validateMongoDbId(id);
  //console.log("cart:", cart);
  try {
    //create empty array
    let products = [];
    const findUser = await User.findById(id);
    //check if user is already product in cart

    const alreadyExistCart = await Cart.findOne({ orderby: findUser.id });
    console.log("userLogin:", alreadyExistCart);

    if (alreadyExistCart) {
      alreadyExistCart.remove();
      console.log("cart already exits");
    }

    // const alreadyExistCart = await Cart.findOne({ orderby: findUser.id });
    // if (!alreadyExistCart) {
    //   alreadyExistCart.remove();
    // }
    for (let i = 0; i < cart.length; i++) {
      let obj = {};
      obj.product = cart[i].id;
      obj.count = cart[i].count;
      obj.color = cart[i].color;
      let getPrice = await Product.findById(cart[i].id).select("price").exec();
      obj.price = getPrice.price;
      products.push(obj);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      // product count + products price calculated
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    const newCart = await new Cart({
      products,
      cartTotal,
      orderby: findUser?.id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});
//get user cart

const getUserCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const cart = await Cart.findOne({ orderby: id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// empty cart fun
const emptyCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);

  try {
    const user = await User.findById(id);
    const emptyCart = await Cart.findOneAndRemove({ orderby: user.id });
    res.json(emptyCart);
  } catch (error) {
    throw new Error(error);
  }
});

// apply coupon
// const applyCoupon = asyncHandler(async (req, res) => {
//   const { coupon } = req.body;
//   const { id } = req.user;
//   validateMongoDbId(id);
//   const validateCoupon = await Coupon.findOne({ name: coupon });
//   if (validateCoupon === null) {
//     throw new Error("Invalid coupon");
//   }
//   const user = await User.findById(id);
//   let { cartTotal } = await Cart.findOne({ orderby: user.id });
//   console.log(user, "All");
//   let totalAfterDiscount = (
//     cartTotal -
//     (cartTotal * validateCoupon.discount) / 100
//   ).toFixed(2);

//   //update cartTotal in cart Table
//   await Cart.findByIdAndUpdate(
//     { orderby: id },
//     { totalAfterDiscount },
//     { new: true }
//   );
//   res.json(totalAfterDiscount);
// });

const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { id } = req.user;
  validateMongoDbId(id);

  const validCoupon = await Coupon.findOne({ name: coupon });

  if (validCoupon === null) {
    throw new Error("Invalid Coupon");
  }
  const user = await User.findById(id);
  let { cartTotal } = await Cart.findOne({
    orderby: user.id,
  }).populate("products.product");
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Cart.findOneAndUpdate(
    { orderby: user.id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

// create Order

// const createOrder = asyncHandler(async (req, res) => {
//   const { COD, couponApplied } = req.body;
//   const { id } = req.user;
//   validateMongoDbId(id);
//   try {
//     if (!COD) {
//       throw new Error("Create Cash Order failed");
//     }
//     const user = await User.findById(id);
//     let userCart = await Cart.findOne({ orderby: user.id });
//     let finalAmount = 0;
//     if (couponApplied && userCart.totalAfterDiscount) {
//       finalAmount = userCart.totalAfterDiscount * 100;
//     } else {
//       finalAmount = userCart.cartTotal * 100;
//     }
//     const newOrder = await new Order({
//       products: userCart.products,
//       paymentIntent: {
//         id: uniqid(),
//         method: "COD",
//         amount: finalAmount,
//         status: "cash on Delivery",
//         created: Date.now(),
//         currency: "usd",
//       },
//       orderby: user.id,
//       orderStatus: "Cash On Delivery",
//     }).save();
//     // console.log("newOrder is:==", newOrder);
//     //we need to dec  the quantity of product
//     let updatedBy = userCart.products.map((item) => {
//       return {
//         updateOne: {
//           filter: { id: item.product.id },
//           updated: { $inc: { quantity: -item.count, sold: +item.count } },
//         },
//       };
//     });
//     //update order
//     const updatedOrder = await Product.bulkWrite(updatedBy, {});
//     res.json({ message: "Oder Successfully" });
//   } catch (error) {
//     throw new Error(error);
//   }
// });

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    if (!COD) throw new Error("Create cash order failed");
    const user = await User.findById(id);
    let userCart = await Cart.findOne({ orderby: user.id });
    let finalAmout = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmout = userCart.totalAfterDiscount;
    } else {
      finalAmout = userCart.cartTotal;
    }

    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user.id,
      //orderStatus: "Cash on Delivery",
      orderStatus: "Cash on Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { id: item.product.id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});

//get Orders
const getOrders = asyncHandler(async (req, res) => {
  const { id } = req.user;

  //6492d2b884ab3085e60168bd
  validateMongoDbId(id);
  try {
    const userOrders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby.orderby")
      .exec();
    console.log("Order", userOrders);
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

// get all users orders

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const getAllUserOrders = await Order.find()
      .populate("products.product")
      .exec();
    console.log("Order", userOrders);
    res.json(getAllUserOrders);
  } catch (error) {
    throw new Error(error);
  }
});

//update order status
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findByOrder = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(findByOrder);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createUser,
  userLogin,
  allUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  userBlocked,
  userUnBlocked,
  handleRefreshTOken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  userAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
};
