"use client";
import { useGetDataQuery } from "@/app/lib/services/dataApi";

export default function Header() {
  const { data, error, isLoading, isFetching } = useGetDataQuery(null);
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const marketCap = data?.data.total_market_cap;
  const marketVolume = data?.data.total_volume;
  const marketCapPercentage = data?.data.market_cap_percentage;

  const totalMarketCap = marketCap?.usd ?? 0;
  const formatedMarketCap = formatCompactNumber(totalMarketCap);
  const totalVolume = marketVolume?.usd ?? 0;
  const formatedVolume = formatCompactNumber(totalVolume);

  const btcPercentage = Math.floor(marketCapPercentage?.btc ?? 0);
  const ethPercentage = Math.floor(marketCapPercentage?.eth ?? 0);

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
