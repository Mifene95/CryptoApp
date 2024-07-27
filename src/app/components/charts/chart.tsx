import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetMarketChartQuery } from "@/app/lib/services/marketChartApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const mapPeriodToDays = (period: string) => {
  switch (period) {
    case "1D":
      return 1;
    case "7D":
      return 7;
    case "14D":
      return 14;
    case "1M":
      return 30;
    case "1W":
      return 7;
    case "1Y":
      return 365;
    case "5Y":
      return 1825;
    default:
      return 7;
  }
};

const CryptoChart = ({ period }: { period: string }) => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: mapPeriodToDays(period),
    interval: "daily",
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.prices) return <div>No data available</div>;

  type PriceData = [number, number];

  let priceDataArray = data.prices as unknown as PriceData[];

  const lastTimestamp = priceDataArray[priceDataArray.length - 1][0];
  const secondLastTimestamp = priceDataArray[priceDataArray.length - 2][0];
  if (lastTimestamp - secondLastTimestamp < 86400000) {
    priceDataArray = priceDataArray.slice(0, -1);
  }

  const prices = priceDataArray.map((price) => price[1]);
  const timestamps = priceDataArray.map((price) =>
    new Date(price[0]).toLocaleDateString()
  );

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "",
        data: prices,
        borderColor: "rgba(120, 120, 250, 1)",
        backgroundColor: "rgba(120, 120, 250, 1)",
      },
    ],
  };

  return (
    <div className="w-[620px] h-[216px] py-6 px-6">
      <div className="flex flex-col">
        <span>Bitcoin (Btc)</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div className="w-[584px]">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default CryptoChart;
