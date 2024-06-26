"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMarketDataQuery } from "@/app/lib/services/coinApi";

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}
function SampleNextArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(120, 120, 250)",

        borderRadius: "50%",
        padding: "14px",
        right: "-40px",
        marginTop: "10px",
      }}
    ></div>
  );
}

function SamplePrevArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(120, 120, 250)",
        borderRadius: "50%",
        padding: "14px",
        left: "-40px",
        marginTop: "10px",
      }}
    ></div>
  );
}

function MultipleItems() {
  const { data, error, isLoading, isFetching } = useGetMarketDataQuery({
    vs_currency: "usd",
  });
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const extractData = data?.map((coin) => ({
    id: coin.id,
    image: coin.image,
    symbol: coin.symbol,
    name: coin.name,
    current_price: coin.current_price,
    price_change: coin.price_change_percentage_24h,
  }));

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {extractData?.map((coin) => (
          <div key={coin.id}>
            <div className="h-78 bg-dark-exodus bg-opacity-50 flex rounded-md border border-dark-stargate">
              <div className="flex">
                <img
                  className="w-8 h-8 my-23 mx-4"
                  src={coin.image}
                  alt={coin.name}
                />
                <div className="flex flex-col justify-center">
                  <span className="font-font1 font-medium text-light-text4 text-base">
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </span>
                  <div className="flex gap-2">
                    <span className="font-font1 font-normal text-light-text4 text-sm">
                      {coin.current_price} USD
                    </span>
                    <div className="flex flex-row items-center gap-1">
                      {coin.price_change > 0 ? (
                        <svg
                          className="fill-light-green2 dark:fill-dark-boubble"
                          width="8"
                          height="4"
                          viewBox="0 0 8 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.00065 0.333008L0.667318 3.66634L7.33398 3.66634L4.00065 0.333008Z" />
                        </svg>
                      ) : (
                        <svg
                          width="8"
                          height="4"
                          viewBox="0 0 8 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.80013 3.66699L7.13346 0.333659L0.466797 0.333659L3.80013 3.66699Z"
                            fill="#FE2264"
                          />
                        </svg>
                      )}
                      <span
                        className={`font-font1 font-normal text-sm ${
                          coin.price_change > 0
                            ? "text-light-green2 dark:text-dark-boubble"
                            : "text-dark-peevish_red dark:text-dark-peevish_red"
                        }`}
                      >
                        {Math.round(Math.abs(coin.price_change * 100)) / 100}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
