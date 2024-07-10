export default function TimeStamps() {
  return (
    <div className="flex flex-row gap-2 bg-light-text1 rounded-md text-light-text4 w-[436px] h-[42px] items-center font-font1 font-medium text-sm">
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate my-1 ml-1">
        1D
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate">
        7D
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate">
        14D
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate">
        1M
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate">
        1W
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate">
        1Y
      </button>
      <button className="px-2 py-5 w-14 hover:bg-dark-exodus rounded-md border-dark-stargate mr-1">
        5Y
      </button>
    </div>
  );
}
