import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4 px-3">
      <div className="flex flex-row gap-2.5 items-center">
        <Image
          src="/light/logo_home.svg"
          width={24}
          height={24}
          alt="Home logo"
        />
        <Link
          href="/"
          className="text-base font-medium font-font1 text-light-american_blue"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
