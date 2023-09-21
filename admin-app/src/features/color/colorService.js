import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../utils/base_url";

export const getColors = createAsyncThunk(
  "color/get-colors",
  async (thunkAPI) => {
    try {
      const getData = await axios.get(`${base_url}color/all-colors`);
      //   console.log("color==>", getData.data);
      return getData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
