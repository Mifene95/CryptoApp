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

const mapPeriodToDays = (period: string): number => {
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

type PriceData = [number, number];

const CryptoVolumeChart = ({ period }: { period: string }) => {
  const { data, error, isLoading } = useGetMarketChartQuery({
    coinId: "bitcoin",
    vs_currency: "usd",
    days: mapPeriodToDays(period),
    interval: "daily",
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !data.total_volumes) return <div>No data available</div>;

  let volumeDataArray = data.total_volumes as unknown as PriceData[];
  const lastTimestamp = volumeDataArray[volumeDataArray.length - 1][0];
  const secondLastTimestamp = volumeDataArray[volumeDataArray.length - 2][0];
  if (lastTimestamp - secondLastTimestamp < 86400000) {
    volumeDataArray = volumeDataArray.slice(0, -1);
  }

  const volumes = volumeDataArray.map((volume) => volume[1]);
  const timestamps = volumeDataArray.map((volume) =>
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
    <div className="w-[850px] h-[216px]">
      <div className="flex flex-col font-font1 font-normal dark:text-dark-white gap-5 items-center mt-5">
        <span>Volume 24h </span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div className="w-[850px]">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

CryptoVolumeChart.propTypes = {
  period: PropTypes.string.isRequired,
};

export default CryptoVolumeChart;
