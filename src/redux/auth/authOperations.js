import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchMovies } from "../movies/moviesOperations";
import { resetUserInfo } from "../movies/moviesSlicer";
import { films } from "../api/sample_movies";
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
  const { data } = await axios.post("/sessions", credientials);
  token.set(data.token);
  return data;
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  await axios.post("/sessions");
  fetchMovies();
  resetUserInfo();
  token.unset();
});

const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;
  token.set(persistedToken);
  return persistedToken;
});

const importMovies = createAsyncThunk(
  "movies/importMovies",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post("movies/import", films);
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

export { register, logout, login, refresh, importMovies };
