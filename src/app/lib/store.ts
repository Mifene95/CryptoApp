"use client";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme.slice";
import { dataApi } from "./services/dataApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coinApi } from "./services/coinApi";
import { marketChartApi } from "./services/marketChartApi";

export const store = configureStore({
  reducer: {
    themeReducer,
    [dataApi.reducerPath]: dataApi.reducer,
    [coinApi.reducerPath]: coinApi.reducer,
    [marketChartApi.reducerPath]: marketChartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dataApi.middleware, coinApi.middleware, marketChartApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
