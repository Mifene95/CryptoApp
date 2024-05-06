"use client";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme.slice";
import { dataApi } from "./services/dataApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    themeReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dataApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
