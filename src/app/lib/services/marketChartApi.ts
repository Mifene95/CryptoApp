"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ChartData = {
    prices: [number, number]
    market_caps: [number, number]
    total_volumes: [number, number]
}

export const marketChartApi = createApi({
    reducerPath: "marketChartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
    endpoints: (builder) => ({
      getMarketChart: builder.query<ChartData, { coinId: string; vs_currency: string; days: number; interval: string }>({
        query: ({ coinId, vs_currency, days, interval }) =>
          `coins/${coinId}/market_chart?vs_currency=${vs_currency}&days=${days}&interval=${interval}`,
      }),
    }),
  });

  export const { useGetMarketChartQuery } = marketChartApi;