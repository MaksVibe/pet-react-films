import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import combineReducers from "react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61c5ad5dc003e70017b79844.mockapi.io/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "/contacts",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation({
      query: (contact) => ({
        url: `/contacts`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    getTodo: builder.query({
      query: () => ({
        url: `/contacts`,
        method: "GET",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});
export const { filterContacts } = filterSlice.actions;
export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useGetTodoQuery,
} = todoApi;
