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

import { authSlice } from "./auth/authSlice";
import { api } from "./API/API";
import { personSlice } from "./person/personSlice";
import { budgetWidgetApi } from "./API/budgetWidgetApi";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistedAuthReducer,
    [api.reducerPath]: api.reducer,
    [personSlice.name]: personSlice.reducer,
    [budgetWidgetApi.reducerPath]: budgetWidgetApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    api.middleware,
    budgetWidgetApi.middleware,
  ],
});

export const persistor = persistStore(store);
