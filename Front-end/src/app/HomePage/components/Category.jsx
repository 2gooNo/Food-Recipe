"use client";
import Image from "next/image";

export function Category({ food }) {
  return (
    <div className="flex flex-col justify-center items-center w-[180px] gap-[20px] hover:text-[#ff6430] transition-colors duration-400 ease-in-out">
      <Image
        width={180}
        height={180}
        src={food.Image}
        className="rounded-[50%]"
      />
      <h3>{food.name}</h3>
    </div>
  );
}
