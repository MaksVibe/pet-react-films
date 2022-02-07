import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refresh } from "./authOperations";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // SIGN UP
    [register.pending](state, action) {
      state.error = null;
    },
    [register.fulfilled](state, { meta, payload }) {
      if (payload.error) return (state.error = payload.error);
      state.user = meta.arg.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    // SIGN IN
    [login.pending](state, action) {
      state.error = null;
    },
    [login.fulfilled](state, { meta, payload }) {
      if (payload.error) return (state.error = payload.error);
      state.user = meta.arg.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    // LOGOUT
    [login.pending](state, action) {
      state.error = null;
    },
    [logout.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },

    [refresh.pending](state, action) {
      state.error = null;
    },
    [refresh.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
