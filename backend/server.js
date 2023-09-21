const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
// const ProductsModel = require("./models/Products");
const dbConnect = require("./config/dbConnection");
// routes starts
const authRoute = require("../backend/routes/authRoute");
const productRoute = require("../backend/routes/productRoute");
const blogRoute = require("../backend/routes/blogRoute");
const categoryRoute = require("../backend/routes/productCategoryRoute");
const blogCategoryRoute = require("../backend/routes/blogCatRoute");
const brandRoute = require("../backend/routes/brandRoute");
const couponRoute = require("../backend/routes/couponRoute");
const colorRoute = require("../backend/routes/colorRoute");
const enqRoute = require("../backend/routes/enqRoute");
// routes End
const { notFound, errorHandler } = require("./middelwares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

//All routes iformation should be defiend to here

const PORT = 4000;
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
// const PORT = 4000;
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// routing set up routes for  users

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/category", categoryRoute);
app.use("/api/blogcategory", blogCategoryRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/color", colorRoute);
app.use("/api/enq", enqRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`listening on port server start ! Happy coding 💻 ${PORT}`);
});
