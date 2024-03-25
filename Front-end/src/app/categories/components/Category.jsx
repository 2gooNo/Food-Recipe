"use client";
import { useState } from "react";
// import Stuff from "@/app/categories/json/food";

export function Category({ category }) {
  return (
    <div className="flex flex-col justify-center items-center w-[260px] gap-[20px] hover:text-[#ff6430] transition-colors duration-400 ease-in-out">
      <img className="w-[260px]" src={category.picture} />
      <h3>{category.name}</h3>
    </div>
  );
}
