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
  
);

export const options = {
  
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
    },
  },
};

const CryptoChart = () => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: 6,
    interval: "daily"
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.prices) return <div>No data available</div>;

  const prices = data.prices.map((price) => price[1]);
  const timestamps = data.prices.map((price) => new Date(price[0]).toLocaleDateString());

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "",
        data: prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
  <div className="w-[632px] h-[404px]">
    <Line options={options} data={chartData} />
    </div>
    );

};

export default CryptoChart;
