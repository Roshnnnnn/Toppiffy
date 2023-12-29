import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const cartItem = localStorage.getItem("cartItem");
  return cartItem ? JSON.parse(cartItem) : [];
};

const initialState = {
  cart: loadCartFromStorage(),
  totalAmount: 0,
  totalPrice: 0,
};

const calculateTotalAmount = (cart) => {
  return cart.reduce((total, item) => total + item.amount, 0);
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find((item) => item.id === productId.id);
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            amount: 1,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.description,
          });
        }
        state.totalAmount = calculateTotalAmount(state.cart);
        state.totalPrice = calculateTotalPrice(state.cart);
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
      } catch (error) {
        return error;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find((item) => item.id === productId.id);
        if (exist.amount === 1) {
          state.cart = state.cart.filter((item) => item.id !== productId.id);
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
        }
        state.totalAmount = calculateTotalAmount(state.cart);
        state.totalPrice = calculateTotalPrice(state.cart);
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
