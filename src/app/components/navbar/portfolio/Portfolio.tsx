import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="py-4 px-3 opacity-50">
      <div className="flex flex-row gap-2.5 items-center">
        <svg
          className="stroke-light-american_blue dark:stroke-dark-white"
          width="18"
          height="20"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 11L10.5 17L1.5 11M19.5 15L10.5 21L1.5 15M19.5 7L10.5 13L1.5 7L10.5 1L19.5 7Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Link
          href="/portfolio"
          className="text-base font-normal text-light-american_blue dark:text-dark-white font-font1"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
