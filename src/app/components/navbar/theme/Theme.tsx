"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { switchTheme } from "@/app/lib/features/theme.slice";
import { useEffect } from "react";

export default function Theme() {
  const isdark = useAppSelector((state) => state.themeReducer.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isdark]);

  return (
    <div className="px-3 py-3 rounded-xl bg-light-lavender_blue dark:bg-dark-coarse h-48">
      <button
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        <svg
          className={`${isdark ? "hidden" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
            stroke="#424286"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isdark ? "" : "hidden"}`}
        >
          <path
            d="M10.7297 1V2.62162M10.7297 19.3784V21M21 11H19.3784M2.62162 11H1M18.0711 18.0711L16.9244 16.9244M5.07559 5.07559L3.92893 3.92893M3.92894 18.0711L5.0756 16.9244M16.9244 5.0756L18.0711 3.92894M16.4054 11C16.4054 13.9853 13.9853 16.4054 11 16.4054C8.01468 16.4054 5.59459 13.9853 5.59459 11C5.59459 8.01468 8.01468 5.59459 11 5.59459C13.9853 5.59459 16.4054 8.01468 16.4054 11Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
