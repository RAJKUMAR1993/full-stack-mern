import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../utils/base_url";

export const getBlogCategory = createAsyncThunk(
  "blogCategory/get-blogCategory",
  async (thunkAPI) => {
    try {
      const getData = await axios.get(
        `${base_url}blogcategory/get-all-category`
      );
      return getData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
