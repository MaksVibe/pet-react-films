import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credientials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users", credientials);
      token.set(data.token);
      return data;
    } catch (error) {
      return toast.error("WRONG DATA! PLEASE, TRY AGAIN.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
);

const login = createAsyncThunk("auth/login", async (credientials, thunkAPI) => {
  try {
    const { data } = await axios.post("/sessions", credientials);
    token.set(data.token);
    return data;
  } catch (error) {
    return toast.error("WRONG DATA! PLEASE, TRY AGAIN.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/sessions");
    token.unset();
  } catch (error) {
    return toast.warn("SOMETHING WENT WRONG :(", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (credentials, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) return false;
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/sessions");
      return data;
    } catch (error) {
      token.unset();
      return toast.warn("SOMETHING WENT WRONG :(", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
);

export { register, logout, login, fetchCurrentUser };
