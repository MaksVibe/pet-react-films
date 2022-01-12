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
  tagTypes: ["Sessions", "Users"],
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
      invalidatesTags: ["Sessions"],
    }),
  }),
});

console.log(`moviesApi`, moviesApi.endpoints.createUser.matchFulfilled);
export const { useCreateUserMutation, useSignInMutation } = moviesApi;
