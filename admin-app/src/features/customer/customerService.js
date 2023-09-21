import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";
// login process

//get country by using country

export const getUser = createAsyncThunk(
  "customers/all-users",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${base_url}user/all-users`);
      return response.data;
    } catch (error) {
      //rejectWithValue sends to error message is to payload
      return thunkAPI.rejectWithValue(error);
    }
  }
);
