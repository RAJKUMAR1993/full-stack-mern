import axios from "axios";
import { base_url } from "../../utils/base_url";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const getUserFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const config = {
//   headers: { Authorization: `Bearer ${getUserFromLocalStorage.token}` },
// };
// console.log("Token:", config);

// export const getOrders = createAsyncThunk(
//   "order/getOrder",
//   async (thunkAPI) => {
//     try {
//       const getData = await axios.get(`${base_url}user/get-orders`);
//       console.log(getData.data);
//       return getData.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
