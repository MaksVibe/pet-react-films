// import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { changeFilter } from "./moviesAction";
// import {
//   fetchMovies,
//   addMovie,
//   deleteMovie,
//   getMovie,
//   getCurrentMovie,
// } from "./moviesOperations";

// const itemsReducer = createReducer([], (builder) => {
//   builder
//     .addCase(fetchMovies.fulfilled, (_, action) => action.payload)
//     .addCase(getMovie.fulfilled, (_, action) => action.payload.data)
//     .addCase(deleteMovie.fulfilled, (state, action) =>
//       state.filter((contact) => contact.id !== action.payload)
//     );
// });

// const filterReducer = createReducer("", (builder) => {
//   builder.addCase(changeFilter, (state, action) => action.payload);
// });

// const mutateLibReducer = createReducer("", (builder) => {
//   builder.addCase(addMovie.fulfilled, (_, action) => action.payload);
// });

// const getItemReducer = createReducer("", (builder) => {
//   builder.addCase(getCurrentMovie.fulfilled, (_, action) => action.payload);
// });

// const moviesReducer = combineReducers({
//   items: itemsReducer,
//   libraryItems: mutateLibReducer,
//   currentItem: getItemReducer,
//   filter: filterReducer,
// });
// export default moviesReducer;
