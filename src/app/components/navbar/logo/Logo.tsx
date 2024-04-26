import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row gap-2.5">
      <Image src="/logo.svg" width={34.8} height={20} alt="CryptoApp logo" />
      <span className="text-xl">Logoipsm</span>
    </div>
  );
}
