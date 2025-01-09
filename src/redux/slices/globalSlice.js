/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-extraneous-dependencies
import jwtDecode from "jwt-decode";

const initialState = {
  isLoggedIn: false,
  user: {},
  lastRoute: "",
  orderHistory: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      localStorage.setItem("token", action.payload);
      const decodedToken = jwtDecode(action.payload);
      state.user = { ...decodedToken, token: action.payload };
    },
    setLastRoute: (state, action) => {
      state.lastRoute = action.payload;
    },
    setOrderHistory: (state, action) => {
      state.orderHistory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setUser, setLastRoute, setOrderHistory } =
  globalSlice.actions;

export default globalSlice.reducer;
