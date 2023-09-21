import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../utils/base_url";

export const getCategory = createAsyncThunk(
  "category/get-category",
  async (thunkAPI) => {
    try {
      const getData = await axios.get(`${base_url}category/get-all-category`);
      return getData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
