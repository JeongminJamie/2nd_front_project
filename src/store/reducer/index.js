import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productDetailSlice from "./productDetail-slice";
import productRegisteredSlice from "./productRegistered-slice";
import purchaseSlice from "./purchaseSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  productDetail: productDetailSlice.reducer,
  productRegistered: productRegisteredSlice.reducer,
  purchase: purchaseSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
