import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

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

const initialState = loadStateFromSessionStorage() || {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const calculateTotalAmount = (cart) => {
  return cart.reduce((total, item) => total + item.amount, 0);
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
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
      saveStateToSessionStorage(state);
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
      saveStateToSessionStorage(state);

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
        saveStateToSessionStorage(state);

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
      saveStateToSessionStorage(state);

      clearFirestoreCart();
    },
  },
});

const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Error saving state to session storage:", err);
  }
};

const updateFirestoreCart = async (cart) => {
  const user = getAuth().currentUser;
  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { cart: sanitizeCartData(cart) }, { merge: true });
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
} = cartSlice.actions;

export default cartSlice.reducer;
