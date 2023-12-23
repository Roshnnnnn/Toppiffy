import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  // auth: authReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
