import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../api/api";
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
  async (movies, thunkAPI) => {
    try {
      console.log("movies", movies);
      const { data } = await api.importData(`${API_ENDPOINT}/import`, movies);
      console.log("data", data);
      return data;
    } catch (error) {
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
