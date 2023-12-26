import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

const initialState = {
  filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || data,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredProducts: (state, action) => {
      try {
        const selectedBrand = action.payload;
        const filter = data.filter((product) =>
          selectedBrand ? product.brand === selectedBrand : true
        );
        state.filteredProducts = filter;
        console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});

export const { filteredProducts } = productSlice.actions;

export default productSlice.reducer;
