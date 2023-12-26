import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import productReducer from "./slices/productSlice";
// import sliderReducer from "./slices/sliderSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  filter: filterReducer,
  product: productReducer,
  // slider: sliderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
