import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import chocolatesReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  chocolates: chocolatesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
