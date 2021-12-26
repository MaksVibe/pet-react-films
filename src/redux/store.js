import { configureStore } from "@reduxjs/toolkit";

import { todoApi } from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
});
