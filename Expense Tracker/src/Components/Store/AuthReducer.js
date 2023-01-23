import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  email: localStorage.getItem("emailId"),
  idToken: localStorage.getItem("idToken"),
  isLoggedIn: !!localStorage.getItem("emailId"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;

      localStorage.setItem("emailId", action.payload.email);
      localStorage.setItem("idToken", action.payload.idToken);

      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = null;
      state.idToken = null;

      localStorage.removeItem("emailId");
      localStorage.removeItem("idToken");

      state.isLoggedIn = false;
    },
  },
});

export const AuthActions = authSlice.actions;

export default authSlice.reducer;