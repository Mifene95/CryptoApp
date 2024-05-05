"use client";
import { useGetDataQuery } from "@/app/lib/services/dataApi";

export default function Header() {
  const { data, error, isLoading, isFetching } = useGetDataQuery(null);
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const marketCap = data?.data.total_market_cap;
  const marketVolume = data?.data.total_volume;
  const marketCapPercentage = data?.data.market_cap_percentage;

  let totalMarketCap = 0;
  let totalVolume = 0;
  let formatedMarketCap;
  let formatedVolume;
  const btcPercentage = Math.floor(marketCapPercentage?.btc ?? 0);
  const ethPercentage = Math.floor(marketCapPercentage?.eth ?? 0);

  if (marketCap && marketVolume) {
    for (const key in marketCap) {
      if (key === "usd") {
        totalMarketCap = marketCap[key];
        totalVolume = marketVolume[key];
      }
      formatedVolume = formatCompactNumber(totalVolume);
      formatedMarketCap = formatCompactNumber(totalMarketCap);
    }
  }

  function formatCompactNumber(number: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    });

    return formatter.format(number);
  }

  return (
    <>
      <div>
        <p>coins: {data?.data.active_cryptocurrencies}</p>
      </div>
      <div>
        <p>Exchange: {data?.data.markets}</p>
      </div>
      <div>
        <p>${formatedMarketCap}</p>
      </div>
      <div>
        <p>${formatedVolume}</p>
      </div>
      <div>
        <p>btc{btcPercentage}%</p>
      </div>
      <div>
        <p>eth{ethPercentage}%</p>
      </div>
    </>
  );
}
