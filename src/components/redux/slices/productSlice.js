import { createSlice } from "@reduxjs/toolkit";
import { chocolates } from "../../../data.jsx";
import { get, getDatabase, ref, set } from "firebase/database";
import app from "../../config/firebase.js";

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

export const getJsonData = async () => {
  const productRef = ref(db, "products");
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Tension ni lena ka data aa gya h", data);
      return data;
    } else {
      console.log("Daya Kuch to gadbad hai");
      return null;
    }
  } catch (error) {
    console.log("Error getting data from firebase", error);
  }
};

getJsonData();

const initialState = {
  filteredChocolate:
    JSON.parse(sessionStorage.getItem("filteredData")) || chocolates,
  singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")) || null,
  products: [],
  loading: false,
  error: false,
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
        console.log("Filtered chocolates:", filter);
      } catch (error) {
        state.error = true;
        console.error("Error filtering chocolates", error);
      }
    },
    singleProduct: (state, action) => {
      try {
        const oneProduct = chocolates.find(
          (item) => item.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", saveState);
        console.log("Single product:", oneProduct);
      } catch (error) {
        state.error = true;
        console.error("Error setting single product", error);
      }
    },
  },
});

export const { filterChocolate, singleProduct } = productSlice.actions;

export default productSlice.reducer;
