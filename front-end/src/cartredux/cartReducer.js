import { combineReducers } from "redux";

import cartProductReducer from "./shopping/shoping-reducers";
const cartReducer = combineReducers({
  cart: cartProductReducer,
});

export default cartReducer;
