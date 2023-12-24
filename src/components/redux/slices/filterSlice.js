import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setBrand, setPrice, setSort } = filterSlice.actions;

export default filterSlice.reducer;
