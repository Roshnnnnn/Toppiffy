import { createSlice } from "@reduxjs/toolkit";
import { get, getDatabase, ref } from "firebase/database";
import app from "../../config/firebase.js";

const db = getDatabase(app);

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const productRef = ref(db, "products");
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      dispatch(setProducts(data));
    } else {
      console.log("No data available");
      dispatch(fetchProductsFailed("No data available"));
    }
  } catch (error) {
    dispatch(fetchProductsFailed(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

const initialState = {
  filteredChocolate: [],
  singleProduct: null,
  products: [],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "chocolates",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = false;

      state.filteredChocolate = state.products.filter(
        (choco) => choco.brand === state.currentBrand
      );
    },
    fetchProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    filterChocolate: (state, action) => {
      state.currentBrand = action.payload;
      state.filteredChocolate = state.products.filter(
        (choco) => choco.brand === action.payload
      );
    },
    singleProduct: (state, action) => {
      state.singleProduct = state.products.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export const {
  setProducts,
  fetchProductsFailed,
  setLoading,
  filterChocolate,
  singleProduct,
} = productSlice.actions;

export default productSlice.reducer;
