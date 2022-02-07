import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, fetchCurrentUser } from "./authOperations";

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
      state.user = meta.arg.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = false;
    },

    // SIGN IN
    [login.pending](state, action) {
      state.error = null;
    },
    [login.fulfilled](state, { meta, payload }) {
      state.user = meta.arg.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = false;
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
    [login.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },

    // [fetchCurrentUser.fulfilled](state, action) {
    //   state.isLoggedIn = true;
    // },
  },
});

export default authSlice.reducer;
