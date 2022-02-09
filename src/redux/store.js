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
import moviesSlicer from "./movies/moviesSlicer";

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
  key: "movies",
  storage,
  whitelist: ["data"],
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSliceReducer),
    movies: persistReducer(moviesPersistConfig, moviesSlicer),
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
