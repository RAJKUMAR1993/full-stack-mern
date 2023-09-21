import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";
// login process

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${getUserFromLocalStorage.token}`,
    Accept: `application/json`,
    "Content-Type": "application/json",
  },
};
console.log(config);
//get country by using country

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${base_url}user/admin-login`, user);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      //rejectWithValue sends to error message is to payload
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "auth/getOrders",
  async (thunkAPI) => {
    try {
      const getData = await axios.get(`${base_url}user/get-all-orders`, config);
      console.log("getData:", getData.data);
      return getData.data;
    } catch (error) {
      console.log(error);
    }
  }
);
