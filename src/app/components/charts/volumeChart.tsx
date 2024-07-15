"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useGetMarketChartQuery } from "@/app/lib/services/marketChartApi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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

const CryptoVolumeChart = () => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: 7,
    interval: "daily",
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.total_volumes) return <div>No data available</div>;

  const volumes = data.total_volumes.map((volume) => volume[1]);
  const timestamps = data.total_volumes.map((volume) =>
    new Date(volume[0]).toLocaleDateString()
  );

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "",
        data: volumes,
        backgroundColor: "rgba(157, 98, 217, 1)",
        borderColor: "rgba(157, 98, 217, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[620px] h-[216px] py-6 px-6">
      <div className="flex flex-col">
        <span>Volume 24h </span>
        <span>13/03/2023</span>
      </div>
      <div className="w-[584px]">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default CryptoVolumeChart;
