import { configureStore } from "@reduxjs/toolkit";

import { todoApi, filterSlice } from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
});
