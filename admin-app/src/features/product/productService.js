import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const getUserFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const config = {
//   headers: { Authorization: `Bearer ${getUserFromLocalStorage.token}` },
// };
// console.log(getUserFromLocalStorage.token);
export const getProduct = createAsyncThunk(
  "products/get-products",
  async (thunkAPI) => {
    try {
      const getProductData = await axios.get(
        `${base_url}product/getAllProducts`
      );
      console.log(getProductData.data);
      return getProductData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
