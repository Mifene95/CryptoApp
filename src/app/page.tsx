export default function Home() {
  return (
    <>
      <div className="mx-72 mt-10">
        <div className="flex flex-row mb-10">
          <div>
            <button className="w-244 rounded-md border px-3 py-4 border-light-stargate  text-light-text4 bg-light-exodus h-11 bg-opacity-50 font-font1 font-medium text-base flex items-center justify-center">
              Coins
            </button>
          </div>
          <div>
            <button className="w-244 rounded-md px-3 py-4  text-light-text2 h-11 font-font1 font-medium text-base flex items-center justify-center dark:bg-dark-cold_steel dark:text-light-text4">
              Convertor
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-light-text2 font-font1 font-normal text-sm dark:text-light-text4">
            Select the currency to view statics
          </span>
          <div className="flex gap-2.5 px-3 py-4 ">
            <svg
              className="fill-light-american_blue dark:fill-dark-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 18H2V17.46L7 12.46L10.8 16.26C10.9874 16.4463 11.2408 16.5508 11.505 16.5508C11.7692 16.5508 12.0226 16.4463 12.21 16.26L19.71 8.76C19.8037 8.66704 19.8781 8.55644 19.9289 8.43458C19.9797 8.31272 20.0058 8.18201 20.0058 8.05C20.0058 7.91799 19.9797 7.78728 19.9289 7.66542C19.8781 7.54356 19.8037 7.43296 19.71 7.34C19.5226 7.15375 19.2692 7.04921 19.005 7.04921C18.7408 7.04921 18.4874 7.15375 18.3 7.34L11.5 14.14L7.71 10.34C7.52264 10.1537 7.26919 10.0492 7.005 10.0492C6.74081 10.0492 6.48736 10.1537 6.3 10.34L2 14.63V9.46L7 4.46L9.8 7.26C9.98736 7.44625 10.2408 7.55079 10.505 7.55079C10.7692 7.55079 11.0226 7.44625 11.21 7.26L16 2.47L18.19 4.66C18.3783 4.84698 18.6332 4.95149 18.8985 4.95056C19.1639 4.94962 19.418 4.8433 19.605 4.655C19.792 4.4667 19.8965 4.21183 19.8956 3.94646C19.8946 3.6811 19.7883 3.42698 19.6 3.24L16.69 0.35C16.5026 0.163749 16.2492 0.0592072 15.985 0.0592072C15.7208 0.0592072 15.4674 0.163749 15.28 0.35L10.48 5.15L7.69 2.35C7.50264 2.16375 7.24919 2.05921 6.985 2.05921C6.72081 2.05921 6.46736 2.16375 6.28 2.35L2 6.63V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C20 18.7348 19.8946 18.4804 19.7071 18.2929C19.5196 18.1054 19.2652 18 19 18Z" />
            </svg>
            <button className="text-light-text2 font-font1 font-normal text-sm dark:text-light-text4">
              Compare
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
