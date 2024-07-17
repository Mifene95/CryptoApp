"use client";
import PropTypes from "prop-types";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
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

const mapPeriodToDays = (period) => {
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

const CryptoVolumeChart = ({ period }) => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: mapPeriodToDays(period),
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

  CryptoVolumeChart.propTypes = {
    period: PropTypes.string.isRequired,
  };
  return (
    <div className="w-[620px] h-[216px] py-6 px-6">
      <div className="flex flex-col">
        <span>Volume 24h </span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div className="w-[584px]">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default CryptoVolumeChart;
