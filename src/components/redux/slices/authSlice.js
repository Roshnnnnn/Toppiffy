import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

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
      const { email, userId, isSpecialMember = false } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userId = userId;
      state.isSpecialMember = isSpecialMember;

      sessionStorage.setItem("authState", JSON.stringify(state));

      const userRef = doc(db, "users", userId);
      setDoc(userRef, { email, userId, isSpecialMember }, { merge: true });
    },
    loadUserFromFirestore: (state, action) => {
      const user = action.payload;
      state.isLoggedIn = true;
      state.email = user.email;
      state.userId = user.userId;
      state.isSpecialMember = user.isSpecialMember;

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

export const { setActiveUser, logoutUser, loadUserFromFirestore } =
  authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;
export const selectIsSpecialMember = (state) => state.auth.isSpecialMember;

export default authSlice.reducer;
