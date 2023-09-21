import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEnquiry = createAsyncThunk(
  "enquiry/get-enquiry",
  async (thunkAPI) => {
    try {
      const getData = await axios.get(`${base_url}enq/all-enquiry`);
      return getData.data;
    } catch (error) {
      console.log(error);
    }
  }
);
