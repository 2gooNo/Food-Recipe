"use client";
import { useEffect } from "react";
import axios from "axios";
import Stuff from "../json/food";

export function Category({ food, index }) {
  return (
    <div className="flex flex-col justify-center items-center w-[260px] gap-[20px] hover:text-[#ff6430] transition-colors duration-400 ease-in-out">
      <img className="w-[260px]" />
      <h3>{food}</h3>
    </div>
  );
}
