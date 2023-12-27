import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import chocolatesReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  chocolates: chocolatesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
