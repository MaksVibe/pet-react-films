import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovies,
  addMovie,
  deleteMovie,
  getMovie,
  getCurrentMovie,
} from "./moviesOperations";

const initialState = {
  data: {
    items: [],
    libraryItems: [],
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
        state.data.items = payload.data;
      })
      .addCase(fetchMovies.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      // GET MOVIE INFO
      .addCase(getMovie.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getMovie.fulfilled, (state, { payload }) => {
        state.data.loading = false;
      })
      .addCase(getMovie.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })
      .addCase(getCurrentMovie.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.data.loading = false;
      })

      // ADD MOVIE TO LIB
      .addCase(addMovie.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addMovie.fulfilled, (state, { payload }) => {
        console.log("data", payload);
        state.data.loading = false;
        state.data.libraryItems.push(payload);
      });

    // DELETE MOVIE FROM LIB
    // .addCase(deleteMovie.pending, state => {
    //   state.data.loading = true;
    //   state.data.error = null;
    // })
    // .addCase(deleteMovie.fulfilled, (state, { payload }) => {
    //   state.data.loading = false;
    //   const indx = state.data.items.findIndex(item => item.id === payload);
    //   state.data.items.splice(indx, 1);
    // })
    // .addCase(deleteMovie.rejected, (state, { payload }) => {
    //   state.data.loading = false;
    //   state.data.error = payload;
    // });
  },
});

export const { changeFilter, resetUserInfo } = moviesSlice.actions;

export default moviesSlice.reducer;
