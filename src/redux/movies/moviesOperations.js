import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../api/api";
import { token } from "../auth/authOperations";
import movies from "./movies.txt";
const API_ENDPOINT = "/movies";

const fetchMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getData(
        `${API_ENDPOINT}?sort=title&order=ASC&limit=10&offset=0`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const importMovies = createAsyncThunk(
  "movies/importMovies",
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      token.set(persistedToken);

      const formattedMovies = await fetch(movies).then((res) => res.blob());
      const formData = new FormData();
      formData.append("movies", formattedMovies);

      const res = axios
        .post("http://localhost:8000/api/v1/movies/import", formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(`Success` + res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // const res = await api.importData(`${API_ENDPOINT}/import`, formData);
      console.log("res", res);
      return res;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const getMovie = createAsyncThunk(
  "movies/getMovie",
  async (movieId, thunkAPI) => {
    try {
      const { data } = await api.getData(`${API_ENDPOINT}/${movieId}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const addMovie = createAsyncThunk("movies/addMovie", async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`${API_ENDPOINT}/${id}`);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong...");
  }
});

const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (deleteId, thunkAPI) => {
    try {
      await api.deleteItem(API_ENDPOINT, deleteId);
      return deleteId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

export { fetchMovies, addMovie, deleteMovie, getMovie, importMovies };
