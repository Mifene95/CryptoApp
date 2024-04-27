import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row gap-2.5 items-center ml-16">
      <Image src="/logo.svg" width={34.8} height={20} alt="CryptoApp logo" />
      <span className="text-xl text-light-american_blue font-bold font-font2">
        Logoipsm
      </span>
    </div>
  );
}
