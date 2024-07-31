import { useState } from "react";
import PropTypes from "prop-types";

export default function TimeStamps({ onChangePeriod }) {
  const periods = ["1D", "7D", "14D", "1W", "1M", "1Y", "5Y"];
  const [activePeriod, setActivePeriod] = useState("7D");

  const handleClick = (period) => {
    setActivePeriod(period);
    onChangePeriod(period);
  };

  TimeStamps.propTypes = {
    onChangePeriod: PropTypes.func.isRequired,
  };

  return (
    <div className="flex flex-row gap-2 dark:bg-light-text1 bg-light-lavender_blue rounded-md text-light-text4 w-[436px] h-[42px] items-center font-font1 font-medium text-sm">
      {periods.map((period) => (
        <button
          key={period}
          className={`px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate my-1 ml-1 ${
            activePeriod === period ? "bg-dark-exodus" : ""
          }`}
          onClick={() => handleClick(period)}
        >
          {period}
        </button>
      ))}
    </div>
  );
}
