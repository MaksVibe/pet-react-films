import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authSliceReducer from "./auth/authSlice";
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
import moviesReducer from "./movies/moviesReducer";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

const moviesPersistConfig = {
  key: "items",
  storage,
  whitelist: ["items", "libraryItems"],
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSliceReducer),
    movies: persistReducer(moviesPersistConfig, moviesReducer),
    // [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
