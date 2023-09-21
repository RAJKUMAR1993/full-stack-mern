// import { createSlice } from "@reduxjs/toolkit";
// import { getOrders } from "../orders/orderService";

// const initialState = {
//   orders: [],
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: "",
// };

// export const orderSlice = createSlice({
//   name: "Order",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getOrders.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(getOrders.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.orders = action.payload;
//       })
//       .addCase(getOrders.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         state.orders = [];
//       });
//   },
// });

// export default orderSlice.reducer;
