import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../customer/customerService";

const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.customers = [];
      });
  },
});

export default customerSlice.reducer;
