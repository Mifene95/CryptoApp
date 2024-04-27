import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="py-4 px-3 opacity-50">
      <div className="flex flex-row gap-2.5 items-center">
        <Image
          src="/light/logo_portfolio.svg"
          width={18}
          height={20}
          alt="Portfolio logo"
        />
        <Link
          href="/portfolio"
          className="text-base font-normal text-light-american_blue font-font1"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
