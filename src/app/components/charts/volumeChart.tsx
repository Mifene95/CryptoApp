"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useGetMarketChartQuery } from "@/app/lib/services/marketChartApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Crypto Volume Chart",
    },
  },
};

const CryptoVolumeChart = () => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: 7,
    interval: "daily"
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.total_volumes) return <div>No data available</div>;

  const volumes = data.total_volumes.map((volume) => volume[1]);
  const timestamps = data.total_volumes.map((volume) => new Date(volume[0]).toLocaleDateString());

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Volume (USD)",
        data: volumes,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[632px] h-[404px]">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default CryptoVolumeChart;
