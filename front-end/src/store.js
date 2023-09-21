import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartredux/cartReducer";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
