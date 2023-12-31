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
    setActiveUser: (state, action) => {
      const { email, userId } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userId = userId;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userId = null;
    },
  },
});

export const { setActiveUser, logoutUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer;
