import Image from "next/image";

export default function Theme() {
  return (
    <div className="px-3 py-3">
      <Image
        src="/logo_theme.svg"
        width={24}
        height={24}
        alt="Light mode logo"
      />
    </div>
  );
}
