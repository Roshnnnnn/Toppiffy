import { createSlice } from "@reduxjs/toolkit";

const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("authState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadStateFromSessionStorage() || {
  isLoggedIn: false,
  email: null,
  userId: null,
  isSpecialMember: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      const { email, userId, isSpecialMember } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userId = userId;
      state.isSpecialMember = isSpecialMember;

      sessionStorage.setItem("authState", JSON.stringify(state));
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userId = null;
      state.isSpecialMember = false;

      sessionStorage.removeItem("authState");
    },
  },
});

export const { setActiveUser, logoutUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;
export const selectIsSpecialMember = (state) => state.auth.isSpecialMember;

export default authSlice.reducer;
