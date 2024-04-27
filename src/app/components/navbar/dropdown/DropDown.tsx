import Image from "next/image";

export default function DropDown() {
  return (
    <div className="py-4 px-3 rounded-xl bg-light-lavender_blue">
      <div className="flex flex-row gap-1 items-center">
        <Image
          src="/light/logo_dolar.svg"
          width={20}
          height={20}
          alt="Dolar logo"
        />
        <span className="text-sm font-medium pr-2 font-font1 text-light-text2 opacity-80">
          USD
        </span>
        <Image
          src="/light/logo_dropdown.svg"
          width={12}
          height={12}
          alt="Dolar logo"
        />
      </div>
    </div>
  );
}
