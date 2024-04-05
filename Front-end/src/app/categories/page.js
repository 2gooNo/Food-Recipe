"use client";
import { Category } from "@/app/categories/components/Category";
import Stuff from "@/app/categories/json/food";
import { Contacts } from "@/app/categories/components/Contacts";
import { ArrowDown } from "@/app/categories/components/ArrowDown";
import { useState } from "react";
import { Select, Option } from "@mui/joy";
import { Router, useRouter } from "next/navigation";
import { Exit } from "../favorites/components/Exit";

export default function Home() {
  const [appear2, setAppear2] = useState(false);
  const [appear, setAppear] = useState(false);
  const [appear3, setAppear3] = useState(false);
  const router = useRouter();

  function Input() {
    setAppear(!appear);
    console.log("Working");
    if (appear == true) {
      setTimeout(() => {
        setAppear2(!appear2);
      }, 80);
    } else {
      setAppear2(!appear2);
    }
  }
  function GoToHome() {
    router.push("/HomePage");
  }
  function GoToFavorites() {
    router.push("/favorites");
  }
  function searchInput(e) {
    console.log(e.target.value);
  }
  function GoToProfile() {
    router.push("/Profile");
  }
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="flex gap-[100px] justify-between items-center pt-[20px] w-[125vh] ">
        <img className="w-[200px] h-[60px]" src="Taste.png" />
        {!appear2 && (
          <div className="text-[20px] flex justify-between align-center flex-row gap-[20px]">
            <div className="drop_down  transition-colors duration-400 ease-in-out cursor-pointer cate1">
              <Select
                placeholder="HomePage"
                sx={{
                  border: "none",
                  boxShadow: "none",
                  bgcolor: "transparent",
                  color: "black",
                  fontWeight: 700,
                  "& :hover": { color: "red" },
                }}
                indicator={<ArrowDown />}
              >
                <Option value="homePage" onClick={GoToHome} sx={{}}>
                  Home
                </Option>
                <Option value="first">Test 2</Option>
                <Option>Test 3</Option>
              </Select>
            </div>
            <div className="outerdiv_category cursor-pointer w-[300px] drop_down  transition-colors duration-400 ease-in-out cate2">
              <Select
                placeholder="Recipe Page"
                on
                sx={{
                  border: "none",
                  boxShadow: "none",
                  bgcolor: "transparent",
                  color: "black",
                  fontWeight: 700,
                  "& :hover": { color: "red" },
                }}
                indicator={<ArrowDown />}
              >
                <Option sx={{}}>Test 1</Option>
                <Option value="first">Test 2</Option>
                <Option>Test 3</Option>
              </Select>
            </div>
            <div className="outerdiv_category cursor-pointer drop_down  transition-colors duration-400 ease-in-out cate3">
              <Select
                placeholder="Pages"
                on
                sx={{
                  border: "none",
                  boxShadow: "none",
                  bgcolor: "transparent",
                  color: "black",
                  fontWeight: 700,
                  "& :hover": { color: "red" },
                }}
                indicator={<ArrowDown />}
              >
                <Option
                  sx={{}}
                  value="Favorites"
                  onClick={() => GoToFavorites()}
                >
                  Favorites
                </Option>
                <Option value="first">Test 2</Option>
                <Option>Test 3</Option>
              </Select>
            </div>
            <div className="outerdiv_category cursor-pointer cate4">
              <h3 className="Buy">Buy</h3>
            </div>
          </div>
        )}
        <div className="flex flex-row gap-[40px] justify-between items-center">
          <div
            className={`p-[8px] ${
              appear
                ? "search-detail2 border-b-[2px] border-[black]"
                : "search2 border-[2px] border-[black]"
            }
        // h-[40px] transition-all duration-400 ease-in-out flex flex-row justify-end`}
          >
            {appear ? (
              <div className="flex gap-[10px]">
                <button onClick={Input}>
                  <Exit />
                </button>
                <input
                  className=" outline-none w-[860px] rounded-[10px] mr-[10px] placeholder-[black] p-[3px]"
                  placeholder="Enter a dish name..."
                  onChange={searchInput}
                />
                <button></button>
              </div>
            ) : (
              <div>
                {" "}
                <button onClick={Input}>
                  {" "}
                  <img className="w-[20px] h-[20px]" src="search.webp" />
                </button>
              </div>
            )}
          </div>
          <img
            onClick={() => GoToProfile()}
            className="w-[40px]"
            src="default.png"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[50px] justify-center items-center">
        <h3 className="text-[50px] border-b-[1px] border-[grey] w-[125vh]">
          Categories
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-[90px] w-[125vh]">
          {Stuff.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}