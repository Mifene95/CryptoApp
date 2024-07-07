export default function TimeStamps() {
  return (
    <div className="flex flex-row gap-2 bg-light-text1 rounded-md text-light-text4 w-[436px] h-[42px] items-center">
      <button className="px-2 py-5 bg-dark-exodus rounded-md w-14 h-8 border my-1 ml-1">
        1D
      </button>
      <button>7D</button>
      <button>14D</button>
      <button>1M</button>
      <button>1W</button>
      <button>1Y</button>
      <button>5Y</button>
    </div>
  );
}
