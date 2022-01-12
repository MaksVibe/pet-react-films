import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61c5ad5dc003e70017b79844.mockapi.io/",
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: () => "/movies",
      providesTags: ["Movies"],
    }),
    fetchMyMovies: builder.query({
      query: () => "/mymovies",
      providesTags: ["Movies"],
    }),
    addMovies: builder.mutation({
      query: (movie) => ({
        url: `/mymovies`,
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["Movies"],
    }),
    deleteMovies: builder.mutation({
      query: (movieId) => ({
        url: `/mymovies/${movieId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Movies"],
    }),
    getMovie: builder.query({
      query: (movieId) => ({
        url: `/movies/${movieId}`,
        method: "GET",
      }),
      invalidatesTags: ["Movies"],
    }),
  }),
});

export const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    addToken: (_, { payload }) => payload,
  },
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterMovies: (_, { payload }) => payload,
  },
});

export const { addToken } = tokenSlice.actions;
export const { filterMovies } = filterSlice.actions;
export const {
  useFetchMoviesQuery,
  useFetchMyMoviesQuery,
  useDeleteMoviesMutation,
  useAddMoviesMutation,
  useGetMovieQuery,
} = moviesApi;
