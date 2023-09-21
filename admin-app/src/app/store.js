import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/features/auth/authSlice";
import customerReducer from "../../src/features/customer/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import categoryReducer from "../features/category/categorySlice";
import colorReducer from "../features/color/colorSlice";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice";
import blogReducer from "../features/blog/blogSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import orderReducer from "../features/orders/orderSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // order: orderReducer,
    customers: customerReducer,
    products: productReducer,
    brand: brandReducer,
    category: categoryReducer,
    color: colorReducer,
    blogCategory: blogCategoryReducer,
    blog: blogReducer,
    enquiry: enquiryReducer,
  },
});
