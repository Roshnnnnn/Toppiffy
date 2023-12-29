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
        const amountToAdd = 1;

        if (exist) {
          exist.amount += amountToAdd;
          exist.totalPrice += productId.price * amountToAdd;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            amount: amountToAdd,
            totalPrice: productId.price * amountToAdd,
            name: productId.name,
            text: productId.description,
            image: productId.images ? productId.images.image : null,
          });
        }

        state.totalAmount = calculateTotalAmount(state.cart);
        state.totalPrice = calculateTotalPrice(state.cart);
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      try {
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
          localStorage.setItem("cartItem", JSON.stringify(state.cart));
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cartItem");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
