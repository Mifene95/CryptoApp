"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CoinData = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
};

type MarketDataQueryParams = {
  vs_currency: string;
  order?: string;
  per_page?: number;
  page?: number;
};

export const coinApi = createApi({
  reducerPath: "coinAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getMarketData: builder.query<CoinData[], MarketDataQueryParams>({
      query: ({ vs_currency = "usd", order = "market_cap_desc", per_page = 20, page = 1 }) => 
        `coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=false`,
    }),
  }),
});

export const { useGetMarketDataQuery } = coinApi;
