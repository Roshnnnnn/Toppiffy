import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
