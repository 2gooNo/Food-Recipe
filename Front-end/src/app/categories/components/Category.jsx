"use client";
import Image from "next/image";

export function Category({ food }) {
  return (
    <div className="flex flex-col justify-center items-center w-[260px] gap-[20px] hover:text-[#ff6430] transition-colors duration-400 ease-in-out">
      <Image
        width={260}
        height={260}
        src={food.Image}
        className="rounded-[50%]"
      />
      <h3>{food.name}</h3>
    </div>
  );
}
//260
