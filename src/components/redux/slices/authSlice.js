import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  email: localStorage.getItem("email") || null,
  userId: localStorage.getItem("userId") || null,
  isSpecialMember: localStorage.getItem("isSpecialMember") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      const { email, userId, isSpecialMember = false } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userId = userId;
      state.isSpecialMember = isSpecialMember;

      // Save to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("userId", userId);
      localStorage.setItem(
        "isSpecialMember",
        isSpecialMember ? "true" : "false"
      );

      const userRef = doc(db, "users", userId);
      setDoc(userRef, { email, userId, isSpecialMember }, { merge: true });
    },
    loadUserFromFirestore: (state, action) => {
      const user = action.payload;
      state.isLoggedIn = true;
      state.email = user.email;
      state.userId = user.userId;
      state.isSpecialMember = user.isSpecialMember;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userId = null;
      state.isSpecialMember = false;
    },
  },
});

export const { setActiveUser, logoutUser, loadUserFromFirestore } =
  authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;
export const selectIsSpecialMember = (state) => state.auth.isSpecialMember;

export default authSlice.reducer;
