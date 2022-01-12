import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Sessions", "Users", "Movies"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    signIn: builder.mutation({
      query: (user) => ({
        url: `/sessions`,
        method: "POST",
        body: user,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Sessions"],
    }),
    fetchMovies: builder.query({
      query: () => ({
        url: `/movies`,
        method: "GET",
      }),
      extraOptions: { maxRetries: 5 },
      invalidatesTags: ["Movies"],
    }),
  }),
});

export const { useCreateUserMutation, useSignInMutation, useFetchMoviesQuery } =
  moviesApi;
