import { createSlice } from "@reduxjs/toolkit";
import { chocolates } from "../../../data.jsx";

const initialState = {
  filteredChocolate: [],
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
  },
});

export const { filterChocolate } = productSlice.actions;

export const selectFilteredChocolate = (state) =>
  state.chocolates.filteredChocolate;

export default productSlice.reducer;
