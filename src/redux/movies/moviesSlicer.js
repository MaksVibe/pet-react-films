import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovies,
  addMovie,
  deleteMovie,
  getMovie,
  importMovies,
} from "./moviesOperations";

const initialState = {
  data: {
    items: [],
    libraryItems: [],
    currentMovie: null,
    loading: false,
    error: null,
  },
  filter: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    resetUserInfo: (state, _) => {
      state.data.items = [];
      state.data.libraryItems = [];
      state.data.currentMovie = null;
      state.data.loading = false;
      state.data.error = null;
      state.filter = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH MOVIES
      .addCase(fetchMovies.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = payload;
      })
      .addCase(fetchMovies.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(importMovies.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.data.loading = false;
        // state.data.items = payload;
      })
      // GET MOVIE INFO
      .addCase(getMovie.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getMovie.fulfilled, (state, { payload }) => {
        state.data.currentMovie = payload;
        state.data.loading = false;
      })
      .addCase(getMovie.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      // ADD MOVIE TO LIB
      .addCase(addMovie.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addMovie.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.libraryItems.push(payload);
      })

      // DELETE MOVIE FROM LIB
      .addCase(deleteMovie.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteMovie.fulfilled, (state, { payload }) => {
        state.data.loading = false;
      })
      .addCase(deleteMovie.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});

export const { changeFilter, resetUserInfo } = moviesSlice.actions;

export default moviesSlice.reducer;
