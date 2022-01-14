import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
const API_ENDPOINT = "/movies";

const fetchMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getData(
        `${API_ENDPOINT}?sort=title&order=ASC&limit=10&offset=0`
      );
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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const getCurrentMovie = createAsyncThunk(
  "movies/getCurrentMovie",
  async (movieId, thunkAPI) => {
    try {
      const { data } = await api.getData(`${API_ENDPOINT}/${movieId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie, thunkAPI) => {
    try {
      const { data } = await api.saveItem(API_ENDPOINT, newMovie);
      console.log(`addMovie data`, data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

const deleteMovie = createAsyncThunk(
  "movies/deleteMovies",
  async (deleteId, thunkAPI) => {
    try {
      await api.deleteItem(API_ENDPOINT, deleteId);
      return deleteId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

export { fetchMovies, addMovie, deleteMovie, getMovie, getCurrentMovie };
