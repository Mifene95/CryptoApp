"use client";

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
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      ticks: {
        display: false, // Hide y-axis labels
      },
    },
  },
};

const CryptoChart = () => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: 7,
    interval: "daily",
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.prices) return <div>No data available</div>;

  const prices = data.prices.map((price) => price[1]);
  const timestamps = data.prices.map((price) =>
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
    <>
      <div className="w-[620px] h-[216px] py-6 px-6">
        <div className="flex flex-col">
          <span>Bitcoin (Btc)</span>
          <span>13/03/2023</span>
        </div>
        <div className="w-[584px]">
          <Line options={options} data={chartData} />
        </div>
      </div>
    </>
  );
};

export default CryptoChart;
