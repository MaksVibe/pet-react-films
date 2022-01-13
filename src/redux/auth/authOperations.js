import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const login = createAsyncThunk("auth/login", async (credientials, thunkAPI) => {
  try {
    const { data } = await axios.post("/sessions", credientials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/sessions");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (credentials, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/sessions", credentials);
      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export { register, logout, login, fetchCurrentUser };
