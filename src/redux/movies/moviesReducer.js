import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter } from "./moviesAction";
import { fetchMovies, addMovie, deleteMovie } from "./moviesOperations";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(fetchMovies.fulfilled, (_, action) => {
      return action.payload;
    })
    .addCase(addMovie.fulfilled, (state, action) => [...state, action.payload])
    .addCase(deleteMovie.fulfilled, (state, action) =>
      state.filter((contact) => contact.id !== action.payload)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

const moviesReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default moviesReducer;
