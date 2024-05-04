"use client";
import { useGetDataQuery } from "@/app/lib/services/dataApi";

export default function Header() {
  const { data, error, isLoading, isFetching } = useGetDataQuery(null);
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const marketCap = data?.data.total_market_cap;
  const marketVolume = data?.data.total_volume;

  let totalMarketCap = 0;
  let totalVolume = 0;
  let formatedMarketCap;
  let formatedVolume;

  if (marketCap) {
    for (const key in marketCap)
      if (key === "usd") {
        totalMarketCap = marketCap[key];
      }
    formatedMarketCap = formatCompactNumber(totalMarketCap);
  }

  if (marketVolume) {
    for (const key in marketVolume)
      if (key === "usd") {
        totalVolume = marketVolume[key];
      }
    formatedVolume = formatCompactNumber(totalVolume);
  }

  function formatCompactNumber(number: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    });

    return formatter.format(number);
  }
  console.log(totalVolume);
  return (
    <div>
      <p>coins: {data?.data.active_cryptocurrencies}</p>
      <div>
        <p>Exchange: {data?.data.markets}</p>
        <div>
          <p>${formatedMarketCap}</p>
          <div>
            <p>${formatedVolume}</p>
            <div>
              <p>btc</p>
              <div>
                <p>eth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
