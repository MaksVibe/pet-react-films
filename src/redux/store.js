import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { moviesApi, filterSlice, tokenSlice } from "./movies/moviesSlice";

const persistTokenConfig = {
  key: "token",
  storage,
};

export const store = configureStore({
  reducer: {
    token: persistReducer(persistTokenConfig, tokenSlice.reducer),
    [moviesApi.reducerPath]: moviesApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    moviesApi.middleware,
  ],
});

export const persistor = persistStore(store);
