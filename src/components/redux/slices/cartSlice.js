import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const clearFirestoreCart = async () => {
  const user = getAuth().currentUser;
  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { cart: [] }, { merge: true });
  } catch (error) {
    console.error("Error clearing cart in Firestore:", error);
  }
};

const CGST_RATE = 0.09;
const SGST_RATE = 0.09;

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
  totalPriceWithTaxes: 0,
  CGST: 0,
  SGST: 0,
  totalTax: 0,
  shippingInfo: {
    name: "",
    address: "",
    pincode: "",
    phoneNumber: "",
    city: "",
    state: "",
  },
};

const calculateTotalAmount = (cart) => {
  return cart.reduce((total, item) => total + item.amount, 0);
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
};

const calculateTotalTaxAmount = (cart) => {
  const totalCGST = cart.reduce(
    (total, item) => total + item.price * item.amount * CGST_RATE,
    0
  );
  const totalSGST = cart.reduce(
    (total, item) => total + item.price * item.amount * SGST_RATE,
    0
  );
  return { totalCGST, totalSGST };
};

const sanitizeCartData = (cart) => {
  return cart.map((item) => ({
    id: item.id || "",
    name: item.name || "",
    price: item.price || 0,
    amount: item.amount || 0,
    totalPrice: item.totalPrice || 0,
    image: item.image || "",
    description: item.description || "",
  }));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      state.totalAmount = calculateTotalAmount(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
      const { totalCGST, totalSGST } = calculateTotalTaxAmount(state.cart);
      state.CGST = totalCGST;
      state.SGST = totalSGST;
      state.totalTax = totalCGST + totalSGST;
      state.totalPriceWithTaxes = state.totalPrice + state.totalTax;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.cart.find((item) => item.id === product.id);
      const amountToAdd = 1;

      if (exist) {
        exist.amount += amountToAdd;
        exist.totalPrice += product.price * amountToAdd;
      } else {
        state.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          amount: amountToAdd,
          totalPrice: product.price * amountToAdd,
          image: product.image,
          description: product.description,
        });
      }

      state.totalAmount = calculateTotalAmount(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
      const { totalCGST, totalSGST } = calculateTotalTaxAmount(state.cart);
      state.CGST = totalCGST;
      state.SGST = totalSGST;
      state.totalTax = totalCGST + totalSGST;
      state.totalPriceWithTaxes = state.totalPrice + state.totalTax;

      updateFirestoreCart(state.cart);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const exist = state.cart.find((item) => item.id === productId.id);
      if (exist) {
        const minQuantity = 1;

        if (exist.amount > minQuantity) {
          exist.amount--;
          exist.totalPrice = exist.price * exist.amount;
        } else {
          state.cart = state.cart.filter((item) => item.id !== productId.id);
        }
        state.totalAmount = calculateTotalAmount(state.cart);
        state.totalPrice = calculateTotalPrice(state.cart);
        const { totalCGST, totalSGST } = calculateTotalTaxAmount(state.cart);
        state.CGST = totalCGST;
        state.SGST = totalSGST;
        state.totalTax = totalCGST + totalSGST;
        state.totalPriceWithTaxes = state.totalPrice + state.totalTax;

        updateFirestoreCart(state.cart);
      }
    },
    calculateTotalQuantity: (state) => {
      state.totalAmount = calculateTotalAmount(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
      state.CGST = 0;
      state.SGST = 0;
      state.totalTax = 0;
      state.totalPriceWithTaxes = 0;

      clearFirestoreCart();
    },
    setShippingInfo(state, action) {
      const {
        name,
        address,
        pincode,
        phoneNumber,
        city,
        state: shippingState,
      } = action.payload;
      state.shippingInfo.name = name;
      state.shippingInfo.address = address;
      state.shippingInfo.pincode = pincode;
      state.shippingInfo.phoneNumber = phoneNumber;
      state.shippingInfo.city = city;
      state.shippingInfo.state = shippingState;
    },
  },
});

const updateFirestoreCart = async (cart) => {
  const user = getAuth().currentUser;
  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { cart: sanitizeCartData(cart) }, { merge: true });
    console.log("cart updated");
  } catch (error) {
    console.error("Error updating cart in Firestore:", error);
  }
};

export const {
  calculateTotalQuantity,
  setCart,
  addToCart,
  removeFromCart,
  clearCart,
  setShippingInfo,
} = cartSlice.actions;

export const selectShippingInfo = (state) => state.cart.shippingInfo;

export default cartSlice.reducer;

export const initializeCartFromFirestore = () => async (dispatch) => {
  const user = getAuth().currentUser;
  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      dispatch(setCart(userData.cart || []));
    }
  } catch (error) {
    console.error("Error initializing cart from Firestore:", error);
  }
};
