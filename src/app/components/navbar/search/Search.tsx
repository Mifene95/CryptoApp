import Image from "next/image";

export default function Search() {
  return (
    <div className="py-4 px-2 rounded-xl bg-light-lavender_blue">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src="/light/search_logo.svg"
          width={15.42}
          height={15.42}
          alt="Search logo"
        />
        <input
          type="text"
          placeholder="Search..."
          className="font-normal text-sm  text-light-text2 focus:outline-none bg-light-lavender_blue placeholder-light-text2 "
        />
      </div>
    </div>
  );
}
