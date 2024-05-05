import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Data = {
  data: {
    markets: number;
    active_cryptocurrencies: number;
    total_market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    market_cap_percentage: {
      btc: number;
      eth: number;
    };
  };
};

export const dataApi = createApi({
  reducerPath: "dataAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getData: builder.query<Data, null>({
      query: () => "global",
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
