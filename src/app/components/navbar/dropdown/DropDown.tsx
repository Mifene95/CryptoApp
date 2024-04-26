import Image from "next/image";

export default function DropDown() {
  return (
    <div className="py-4 px-3">
      <div className="flex flex-row gap-1 items-center">
        <Image src="/logo_dolar.svg" width={20} height={20} alt="Dolar logo" />
        <span className="text-sm font-medium pr-2">USD</span>
        <Image
          src="/logo_dropdown.svg"
          width={12}
          height={12}
          alt="Dolar logo"
        />
      </div>
    </div>
  );
}
