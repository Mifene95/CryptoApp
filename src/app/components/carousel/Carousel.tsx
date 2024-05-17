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
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function MultipleItems() {
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading, isFetching } = useGetMarketDataQuery({ vs_currency: "usd"});

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };

   if (isLoading || isFetching) {
     return <div>Loading...</div>;
   }

   if (error) {
     return <div>Error loading data</div>;
  }
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-78 bg-dark-exodus bg-opacity-50 flex rounded-md border border-dark-stargate">
          <div className="flex">
            <svg
              className="my-23 mx-4"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_587_10867)">
                <path
                  d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5514 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693248 12.8007 1.21793 9.87707C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z"
                  fill="#F7931A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.371 7.30608L15.0481 8.29081L15.8699 5.22754L17.7084 5.72645L16.9186 8.66318L18.4183 9.06608L19.2095 6.09736L21.0801 6.59772L20.2743 9.58245C20.2743 9.58245 23.3288 10.2588 24.0473 12.7432C24.7659 15.2275 22.4677 16.5323 21.7579 16.5817C21.7579 16.5817 24.4343 18.0494 23.515 20.9366C22.5957 23.8239 19.7739 24.3403 16.8052 23.6784L15.9993 26.7737L14.1288 26.2734L14.9506 23.2261L13.467 22.8217L12.6452 25.8908L10.7892 25.3919L11.6124 22.3374L7.83789 21.3192L8.78916 19.2072C8.78916 19.2072 9.85389 19.4981 10.2568 19.5941C10.6597 19.6901 10.9186 19.2712 11.0321 18.8523C11.1455 18.4334 12.8546 11.4908 13.0161 10.9192C13.1775 10.3475 13.1121 9.90099 12.4343 9.72499C11.7564 9.54899 10.8343 9.27408 10.8343 9.27408L11.371 7.30608ZM15.0801 16.5003L14.0619 20.5483C14.0619 20.5483 19.1106 22.3708 19.7564 19.8064C20.4023 17.2421 15.0801 16.5003 15.0801 16.5003ZM15.5484 14.5803L16.5477 10.8712C16.5477 10.8712 20.8706 11.645 20.3383 13.709C19.8059 15.773 17.2575 14.9817 15.5484 14.5803Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_587_10867">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-col justify-center">
              <span className="font-font1 font-medium text-light-text4 text-base">
                Bitcoin (BTC)
              </span>
              <div className="flex gap-2">
                <span className="font-font1 font-normal text-light-text4 text-sm">
                  27,455.10 USD
                </span>

                <div className="flex flex-row items-center gap-1">
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
                  <span className="font-font1 font-normal text-light-green2 text-sm">
                    2.35%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-252 bg-dark-exodus bg-opacity-50 h-78  flex rounded-md border border-dark-stargate"></div>
        <div className="w-252 bg-dark-exodus bg-opacity-50 h-78  flex rounded-md border border-dark-stargate"></div>
        <div className="w-252 bg-dark-exodus bg-opacity-50 h-78  flex rounded-md border border-dark-stargate"></div>
        <div className="w-252 bg-dark-exodus bg-opacity-50 h-78  flex rounded-md border border-dark-stargate"></div>
        <div className="w-252 bg-dark-exodus bg-opacity-50 h-78  flex rounded-md border border-dark-stargate"></div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
