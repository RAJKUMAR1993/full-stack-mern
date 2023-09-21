import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBrand = createAsyncThunk(
  "brand/get-Brand",
  async (thunkAPI) => {
    try {
      const getBrandList = await axios.get(`${base_url}brand/all-brands`);
      return getBrandList.data;
    } catch (error) {}
  }
);
