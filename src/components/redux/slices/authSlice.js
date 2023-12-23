import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, userId } = action.payload;
      console.log(action.payload);
      state.isLoggedIn = true;
      state.email = email;
      state.userId = userId;
    },
  },
});

export const { SET_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer;
