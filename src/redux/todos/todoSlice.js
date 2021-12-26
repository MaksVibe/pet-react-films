import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
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

export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useGetTodoQuery,
} = todoApi;
