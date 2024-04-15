"use client";
import { Back_End_Url } from "../../../back-url";
import { ArrowDown } from "@/app/categories/components/ArrowDown";
import { useState } from "react";
import { Exit } from "@/app/favorites/components/Exit";
import { useRouter } from "next/navigation";
import { Select, Option } from "@mui/joy";
import { Profile } from "@/app/Profile/components/Profile";
import { At } from "@/app/Profile/components/At";
import { Mail } from "@/app/Profile/components/Mail";
import { Lock } from "@/app/Profile/components/Lock";
import { LogOut } from "@/app/Profile/components/LogOut";
import { Contacts } from "@/app/Profile/components/Contacts";
import axios from "axios";

export default function Home() {
  const [appear3, setAppear3] = useState(false);
  const [appear2, setAppear2] = useState(false);
  const [appear, setAppear] = useState(false);
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const getUser = async () => {
    if (!token) {
      router.push("/LogInHome");
    } else {
      const userId = await axios.get(`${Back_End_Url}/getUser`, {
        headers: { token },
      });
      return userId;
    }
  };

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
  function GoToHome() {
    router.push("/HomePage");
  }
  function GoToCategory() {
    router.push("/categories");
  }
  function searchInput(e) {
    console.log(e.target.value);
  }
  function GoToFavorites() {
    router.push("favorites");
  }
  function LogOutFromProfile() {
    sessionStorage.removeItem("isLoggedIn");
    router.push("/HomePage");
  }
  function SignOut() {
    localStorage.removeItem("token");
  }
  function GoToHome() {
    router.push("/");
  }
  function GoToRec() {
    router.push("/AddRecipe");
  }
  const DeleteButton = async () => {
    const res = await axios.post(
      `${Back_End_Url}/deleteUser`,
      {},
      {
        headers: { token },
      }
    );
    console.log(res.data);
    router.push("/LogInPage");
  };

  return (
    <div className="flex flex-col items-center gap-[115px]">
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
                <Option value="Home" onClick={() => GoToHome()}>
                  Home
                </Option>
                <Option value="categories" onClick={GoToCategory}>
                  Categories
                </Option>
                <Option onClick={GoToFavorites} value="favorites">
                  Favorites
                </Option>
                <Option value="addRec" onClick={() => GoToRec()}>
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
            }`}
          >
            {appear3 ? (
              <div className="flex gap-[10px]">
                <button onClick={Input}>
                  <Exit />
                </button>
                <input
                  className=" outline-none w-[870px] rounded-[10px] mr-[10px] placeholder-[grey] p-[3px] text-grey"
                  placeholder="Enter a dish name..."
                  onChange={searchInput}
                />
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
        </div>
      </div>
      <div className="w-[125vh] flex justify-between items-center border-b-[1px] border-[grey] h-[81px]">
        <h2 className="Profile_word">Profile</h2>
        <button className="bg-[#ff6430] h-[48px] w-[142px] text-[white] rounded-[5px] text-[20px]">
          SAVE
        </button>
      </div>
      <div className="text-[grey] flex w-[85vh] flex-wrap gap-[100px] justify-items-start mr-[400px] ">
        <div className="border-b-[2px] border-[grey] w-[351px] ">
          <h3>USERNAME</h3>
          <div className="flex mb-[10px] items-center gap-[20px] mt-[20px]">
            <At />
            <input
              placeholder="Username"
              className=" placeholder-[grey] border-none w-[300px] outline-none"
            />
          </div>
        </div>
        <div className="border-b-[2px] border-[grey] w-[351px]">
          <h3>EMAIL</h3>
          <div className="flex mb-[10px] items-center gap-[20px] mt-[20px]">
            <Mail />
            <input
              placeholder="Email"
              className=" placeholder-[grey] border-none w-[300px] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[125vh] justify-between items-center">
        <div
          onClick={() => LogOutFromProfile()}
          className="flex justify-center items-center gap-[5px]"
        >
          <LogOut />
          <button onClick={() => SignOut()}>Sign Out</button>
        </div>
        <button onClick={DeleteButton} className="text-[#ff6430]">
          Delete Account
        </button>
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}
