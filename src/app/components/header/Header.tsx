"use client";
import { useGetDataQuery } from "@/app/lib/services/dataApi";

export default function Header() {
  const { data, error, isLoading, isFetching } = useGetDataQuery(null);
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const marketCap = data?.data.total_market_cap;
  const marketVolume = data?.data.total_volume;
  const marketCapPercentage = data?.data.market_cap_percentage;

  const totalMarketCap = marketCap?.usd ?? 0;
  const formatedMarketCap = formatCompactNumber(totalMarketCap);
  const totalVolume = marketVolume?.usd ?? 0;
  const formatedVolume = formatCompactNumber(totalVolume);

  const btcPercentage = Math.floor(marketCapPercentage?.btc ?? 0);
  const ethPercentage = Math.floor(marketCapPercentage?.eth ?? 0);

  function formatCompactNumber(number: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    });
    return formatter.format(number);
  }

  return (
    <>
      <div className="flex items-center gap-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00065 0.333008C3.32065 0.333008 0.333984 3.31967 0.333984 6.99967C0.333984 10.6797 3.32065 13.6663 7.00065 13.6663C10.6807 13.6663 13.6673 10.6797 13.6673 6.99967C13.6673 3.31967 10.6807 0.333008 7.00065 0.333008ZM9.35398 7.81967L5.90065 10.213C5.39398 10.5663 5.10065 10.3597 5.24732 9.76634L5.88065 7.20634L4.78065 6.93301C4.28065 6.81301 4.22065 6.46634 4.64065 6.17301L8.09398 3.77967C8.60065 3.42634 8.89398 3.63301 8.74732 4.22634L8.11398 6.78634L9.21398 7.05967C9.71398 7.18634 9.77398 7.52634 9.35398 7.81967Z"
            fill="white"
          />
        </svg>

        <p className="text-light-text3 text-sm font-medium font-font1">Coins</p>
        <div className="font-font1 text-sm font-medium text-light-text4 ml-2">
          {data?.data.active_cryptocurrencies}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99948 15.1665C9.81948 15.1665 9.65281 15.0665 9.56614 14.9132C9.47948 14.7532 9.47948 14.5665 9.57281 14.4065L10.2728 13.2398C10.4128 12.9998 10.7261 12.9265 10.9595 13.0665C11.1995 13.2065 11.2728 13.5132 11.1328 13.7532L10.9528 14.0532C12.7928 13.6198 14.1728 11.9665 14.1728 9.99316C14.1728 9.71983 14.3995 9.49316 14.6728 9.49316C14.9461 9.49316 15.1728 9.71983 15.1728 9.99316C15.1661 12.8465 12.8461 15.1665 9.99948 15.1665Z"
              fill="white"
              fillOpacity="1"
            ></path>
            <path
              d="M1.33398 6.49967C1.06065 6.49967 0.833984 6.27301 0.833984 5.99967C0.833984 3.15301 3.15398 0.833008 6.00065 0.833008C6.18065 0.833008 6.34732 0.933008 6.43398 1.08634C6.52065 1.24634 6.52065 1.43301 6.42732 1.59301L5.72732 2.75967C5.58732 2.99301 5.28065 3.07301 5.04065 2.92634C4.80732 2.78634 4.72732 2.47967 4.87398 2.23967L5.05398 1.93967C3.20732 2.37301 1.83398 4.02634 1.83398 5.99967C1.83398 6.27301 1.60732 6.49967 1.33398 6.49967Z"
              fill="white"
              fillOpacity="1"
            ></path>
            <path
              d="M9.86732 8.42046V10.3805C9.86732 12.0138 9.21398 12.6671 7.58065 12.6671H5.62065C3.98732 12.6671 3.33398 12.0138 3.33398 10.3805V8.42046C3.33398 6.78712 3.98732 6.13379 5.62065 6.13379H7.58065C9.21398 6.13379 9.86732 6.78712 9.86732 8.42046Z"
              fill="white"
              fillOpacity="1"
            ></path>
            <path
              d="M10.3806 3.33301H8.42063C6.81396 3.33301 6.16062 3.97301 6.14062 5.54634H7.58062C9.54063 5.54634 10.4473 6.45967 10.4473 8.41301V9.85301C12.0273 9.83301 12.6606 9.17968 12.6606 7.57301V5.61967C12.6673 3.98634 12.014 3.33301 10.3806 3.33301Z"
              fill="white"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
        <p className="text-light-text3 text-sm font-medium font-font1 ml-2">
          Exchange
        </p>
        <div className="ml-2 text-light-text4 text-sm font-font1 font-medium">
          {data?.data.markets}
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <svg
            className="flex gap-2"
            width="16"
            height="16"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.00065 0.333008L0.667318 3.66634L7.33398 3.66634L4.00065 0.333008Z"
              fill="#01F1E3"
            />
          </svg>
        </div>
        <p className="font-medium text-sm text-light-text4 font-font1">
          {formatedMarketCap}
        </p>
      </div>
      <div className="flex flex-row items-center">
        <p className="font-font1 font-medium text-sm text-light-text4">
          ${formatedVolume}
        </p>
        <div className="w-53 h-1.5 bg-dark-white opacity-40 ml-5 rounded-sm">
          <div
            className="bg-light-bar_blue h-1.5 rounded-sm"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <svg
          className="mr-5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_587_8852)">
            <path
              d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0866C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.8071 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519936 9.60051 0.913451 7.4078C1.8217 5.21509 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12Z"
              fill="#F7931A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.52872 5.47981L11.2865 6.21835L11.9029 3.9209L13.2818 4.29508L12.6895 6.49763L13.8142 6.79981L14.4076 4.57326L15.8105 4.94853L15.2062 7.18708C15.2062 7.18708 17.4971 7.69435 18.036 9.55763C18.5749 11.4209 16.8513 12.3994 16.3189 12.4365C16.3189 12.4365 18.3262 13.5373 17.6367 15.7027C16.9473 17.8682 14.8309 18.2554 12.6044 17.7591L12 20.0805L10.5971 19.7053L11.2135 17.4198L10.1007 17.1165L9.48436 19.4184L8.09236 19.0442L8.70981 16.7533L5.87891 15.9896L6.59236 14.4056C6.59236 14.4056 7.39091 14.6238 7.69309 14.6958C7.99527 14.7678 8.18945 14.4536 8.27454 14.1394C8.35963 13.8253 9.64145 8.61835 9.76254 8.18963C9.88363 7.7609 9.83454 7.42599 9.32618 7.29399C8.81782 7.16199 8.12618 6.95581 8.12618 6.95581L8.52872 5.47981ZM11.3105 12.3754L10.5469 15.4114C10.5469 15.4114 14.3335 16.7784 14.8178 14.8551C15.3022 12.9318 11.3105 12.3754 11.3105 12.3754ZM11.6618 10.9354L12.4113 8.15363C12.4113 8.15363 15.6535 8.73399 15.2542 10.282C14.8549 11.83 12.9436 11.2365 11.6618 10.9354Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_587_8852">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-light-text4 font-medium font-font1 text-sm">
          {btcPercentage}%
        </p>
        <div className="w-53 h-1.5 ml-5 bg-dark-white opacity-40 relative rounded-sm">
          <div
            className="bg-light-bar_blue h-1.5 rounded-sm"
            style={{ width: `${btcPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <svg
          className="mr-5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_587_8855)">
            <circle cx="8" cy="8" r="8" fill="#627EEA" />
            <path
              d="M7.9564 2.0791L7.87695 2.34895V10.1785L7.9564 10.2578L11.5907 8.1095L7.9564 2.0791Z"
              fill="#C0CBF6"
            />
            <path
              d="M7.95474 2.0791L4.32031 8.1095L7.95474 10.2578V6.45753V2.0791Z"
              fill="white"
            />
            <path
              d="M7.95688 10.944L7.91211 10.9986V13.7877L7.95688 13.9184L11.5934 8.79688L7.95688 10.944Z"
              fill="#C0CBF6"
            />
            <path
              d="M7.95474 13.9184V10.944L4.32031 8.79688L7.95474 13.9184Z"
              fill="white"
            />
            <path
              d="M7.95508 10.2592L11.5894 8.11096L7.95508 6.45898V10.2592Z"
              fill="#8197EE"
            />
            <path
              d="M4.32031 8.11096L7.95474 10.2592V6.45898L4.32031 8.11096Z"
              fill="#C0CBF6"
            />
          </g>
          <defs>
            <clipPath id="clip0_587_8855">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-light-text4 font-medium font-font1 text-sm">
          {ethPercentage}%
        </p>
        <div className="w-53 h-1.5 ml-5  bg-dark-white opacity-40 rounded-sm">
          <div
            className="bg-light-bar_blue h-1.5 rounded-sm"
            style={{ width: `${ethPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
