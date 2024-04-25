import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row gap-2.5">
      <Image src="/logo_home.svg" width={24} height={24} alt="Home logo" />
      <Link href="/" className="text-base font-medium">
        Home
      </Link>
    </div>
  );
}
