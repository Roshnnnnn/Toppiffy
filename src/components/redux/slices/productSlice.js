import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, get, set } from "firebase/database";
import app from "../../config/firebase.js";
import { chocolates } from "../../../data.jsx";

const db = getDatabase(app);

export const uploadJsonData = async () => {
  try {
    await set(ref(db, "products/"), chocolates);
    console.log("Attempting to upload data to Firebase...");
    console.log("Data successfully uploaded to Firebase");
  } catch (error) {
    console.error("Error uploading data to Firebase", error);
  }
};

uploadJsonData();

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const productRef = ref(db, "products");
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Data fetched successfully:", data);
      dispatch(setProducts(data));
    } else {
      console.log("No data available");
      dispatch(fetchProductsFailed("No data available"));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
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

      const filter = state.products.filter(
        (choco) => choco.brand === state.currentBrand
      );
      state.filteredChocolate = filter;
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
      const filter = state.products.filter(
        (choco) => choco.brand === action.payload
      );
      state.filteredChocolate = filter;
    },
    singleProduct: (state, action) => {
      const single = state.products.find((item) => item.id === action.payload);
      state.singleProduct = single;
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
