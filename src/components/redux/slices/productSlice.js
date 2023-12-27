import { createSlice } from "@reduxjs/toolkit";
import { chocolates } from "../../../data.jsx";

const initialState = {
  filteredChocolate:
    JSON.parse(sessionStorage.getItem("filteredData")) || chocolates,
  singleProduct:
    JSON.parse(sessionStorage.getItem("filteredData")) || chocolates,
};

const productSlice = createSlice({
  name: "chocolates",
  initialState,
  reducers: {
    filterChocolate: (state, action) => {
      try {
        const filter = chocolates.filter(
          (choco) => choco.brand === action.payload
        );
        state.filteredChocolate = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
        console.log("filter", filter);
      } catch (error) {
        state.error = true;
      }
    },
    singleProduct: (state, action) => {
      try {
        const oneProduct = chocolates.filter(
          (item) => item.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", saveState);
        console.log("oneProduct", oneProduct);
      } catch (error) {
        state.error = true;
      }
    },
  },
});

export const { filterChocolate, singleProduct } = productSlice.actions;

export default productSlice.reducer;
