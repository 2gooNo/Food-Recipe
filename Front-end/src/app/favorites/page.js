"use client";

import { ArrowDown } from "@/app/categories/components/ArrowDown";
import { useState } from "react";
import { Select, Option } from "@mui/joy";
import { useRouter } from "next/navigation";
import { Contacts } from "@/app/favorites/components/Contacts";
import { Category } from "@/app/favorites/components/Category";
import { Heart } from "@/app/favorites/components/Heart";
import { Edit } from "@/app/favorites/components/Edit";
import { Trash } from "@/app/favorites/components/Trash";
import Stuff from "@/app/favorites/json/food";
import { White_Correct } from "@/app/favorites/components/White_Correct";
import { Exit } from "@/app/favorites/components/Exit";

export default function Home() {
  const [appear3, setAppear3] = useState(false);
  const [appear2, setAppear2] = useState(false);
  const [appear, setAppear] = useState(false);
  const [amount, setAmount] = useState(Stuff.length);
  const [showAll, setShowAll] = useState(false);
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
    if (appear == false) {
      setTimeout(() => {
        setAppear3(!appear3);
      }, 80);
    } else {
      setAppear3(!appear3);
    }
  }
  function GoToCategory() {
    router.push("/categories");
  }
  function ShowAll() {
    setShowAll(!showAll);
  }
  function searchInput(e) {
    console.log(e.target.value);
  }
  function GoToProfile() {
    router.push("/Profile");
  }
  function Home() {
    router.push("/");
  }
  function AddRec() {
    router.push("/AddRecipe");
  }
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="flex gap-[100px] justify-between items-center pt-[20px] w-[125vh] ">
        <img className="w-[200px] h-[60px]" src="Taste.png" />
        {!appear2 && (
          <div className="text-[20px] flex justify-between align-center flex-row gap-[20px]">
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
                <Option value="Home" onClick={() => Home()}>
                  Home
                </Option>
                <Option value="categories" onClick={GoToCategory}>
                  Categories
                </Option>

                <Option value="AddRec" onClick={() => AddRec()}>
                  Add Recipe
                </Option>
              </Select>
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
            {appear3 ? (
              <div className="flex gap-[10px]">
                <button onClick={Input}>
                  <Exit />
                </button>
                <input
                  className=" outline-none w-[860px] rounded-[10px] mr-[10px] placeholder-[black] p-[3px]"
                  placeholder="Enter a dish name..."
                  onChange={searchInput}
                />
                <button>
                  <img className="w-[20px] h-[20px]" src="search.webp" />
                </button>
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
      <div>
        <div className="flex flex-row justify-between w-[123vh] border-b-[1px] border-[#acacac] h-[80px]">
          <div className="flex gap-[30px]">
            <Heart />
            <h3 className="favs">Favorites</h3>
          </div>
          <div>
            {" "}
            <Select
              placeholder="Sorts"
              on
              sx={{
                boxShadow: "none",
                bgcolor: "transparent",
                color: "black",
                fontWeight: 700,
                "& :hover": { color: "red" },
                width: "180px",
              }}
              indicator={<ArrowDown />}
            >
              <Option sx={{}}>Sort1 test</Option>
              <Option value="first">Sort2 test</Option>
            </Select>
          </div>
        </div>
        <div className="flex gap-[30px] mt-[40px]">
          <h3>{amount} Recipes</h3>
          <div className="flex items-center gap-[10px] drop_down">
            <Edit />
            <h3>Edit</h3>
          </div>
          <div className="flex items-center gap-[10px]">
            <div
              onClick={() => ShowAll()}
              className={`border-[1.5px]  w-[16px] h-[16px] rounded-[50%] ${
                showAll ? "bg-[#ff6430] border-[#ff6430]" : "border-[black]"
              } flex justify-center items-center transition-colors duration-300 ease-in-out`}
            >
              <White_Correct />
            </div>
            <h3>All</h3>
          </div>
          <div className="flex items-center gap-[10px] drop_down">
            <Trash />
            <h3>Trash</h3>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-wrap gap-[50px] w-[130vh]"
        c
      >
        {Stuff.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}
