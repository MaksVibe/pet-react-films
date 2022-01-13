import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, fetchCurrentUser } from "./authOperations";

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.meta.arg.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.meta.arg.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
