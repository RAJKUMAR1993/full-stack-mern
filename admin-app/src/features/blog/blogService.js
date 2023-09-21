import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk("blog/get-blog", async (thunkAPI) => {
  try {
    const getData = await axios.get(`${base_url}blog/getAllBlogs`);
    return getData.data;
  } catch (error) {}
});
