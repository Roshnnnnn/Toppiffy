import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
