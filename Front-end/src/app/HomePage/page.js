"use client";

import styles from "./style.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Calendar } from "../../assets/icons/calendar";
import { Back_End_Url } from "../../../back-url";
import { FacebookBlack } from "@/assets/icons/facebookBlack";
import { TwitterBlack } from "@/assets/icons/twitterBlack";
import { InstagramBlack } from "@/assets/icons/instagramBlack";
import { Select, Option } from "@mui/joy";
import { Profile } from "@/assets/icons/profile";
import { ArrowDown } from "../categories/components/ArrowDown";
import { Exit } from "../favorites/components/Exit";
import { Category } from "./components/Category";
import { fetch } from "@cloudinary/url-gen/qualifiers/source";

export default function HomePage() {
  const router = useRouter();
  const [foods, setFoods] = useState([]);
  const [suggestRecipes, setSuggestRecipes] = useState([]);
  const [tryNewRecipes, setTryNewRecipes] = useState([]);
  const [appear, setAppear] = useState(false);
  const [appear3, setAppear3] = useState(false);
  const [appear2, setAppear2] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [searchedFood, setSearchedFood] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const foodData = await axios.get(`${Back_End_Url}/getAllFood`);
    console.log(foodData);
    generateRandomNumbers(foodData);
    generateSixNumbers(foodData);
console.log("foods",foodData);
    setFoods(foodData);
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Back_End_Url}/categories`);
      console.log("Categories:", response.data);
      const categories = response.data;
      const randomCategories = getRandomCategories(categories, 6);
      setCategories(randomCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getRandomCategories = (categories, count) => {
    const shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const searchFood = async () => {
    console.log(searchValue);
    const { data } = await axios.post(`${Back_End_Url}/searchFood`, {
      searchValue: searchValue,
    });
    setSearchedFood(data.data);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchFood();
    }
  };
  function Input() {
    setAppear3(!appear3);
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

  function searchInput(e) {
    console.log(e.target.value);
  }
  function GoToProfile() {
    router.push("/Profile");
  }
  const generateRandomNumbers = async (foodData) => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 3) {
      const randomNumber =
        Math.floor(Math.random() * foodData?.data?.foods.length-1) + 1;
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber);
      }
    }
    console.log("numbers", generatedNumbers);
    const suggesRecipes = generatedNumbers.map(
      (index) => foodData?.data?.foods[index]
    );
    console.log(suggesRecipes);
    setSuggestRecipes(suggesRecipes);
  };
  const generateSixNumbers = async (foodData) => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 6) {
      const randomNumber =
        Math.floor(Math.random() * foodData?.data?.foods.length-1) + 1;
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber);
      }
    }
    console.log("numbers", generatedNumbers);
    const suggesRecipes = generatedNumbers.map(
      (index) => foodData?.data?.foods[index]
    );
    console.log(suggesRecipes);
    setTryNewRecipes(suggesRecipes);
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  function SPageJump(index) {
    const recipeId = suggestRecipes?.[index]?._id;
    console.log(recipeId);

    router.push(`/RecipePage?recipeId=${recipeId}`);
  }
  function TPageJump(index) {
    const recipeId = tryNewRecipes?.[index]?._id;
    console.log(recipeId);

    router.push(`/RecipePage?recipeId=${recipeId}`);
  }
  function pageJump(index) {
    const recipeId = searchedFood?.[index]?._id;
    console.log(recipeId);

    router.push(`/RecipePage?recipeId=${recipeId}`);
  }
  function GoToAddRecipe() {
    router.push("AddRecipe");
  }
  function GoToCategory() {
    router.push("categories");
  }
  function GoToFavs() {
    router.push("/favorites");
  }
  function GoToHomePage() {
    router.push("/HomePage");
  }
  return (
    <div className="body">
      <div className="topNav">
        <div className="navSocial">
          <FacebookBlack></FacebookBlack>
          <TwitterBlack></TwitterBlack>
          <InstagramBlack></InstagramBlack>
        </div>
        <div className="pages-container">
          <Select
            placeholder="Pages"
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
            <Option value="category" onClick={() => GoToCategory()} sx={{}}>
              Categories
            </Option>
            <Option value="favorites" onClick={() => GoToFavs()}>
              Favorites
            </Option>
            <Option value="AddRecipe" onClick={() => GoToAddRecipe()}>
              Add Recipes
            </Option>
          </Select>
        </div>
        <div className="flex flex-row gap-[40px] justify-between items-center">
          <div
            className={`p-[8px] ${
              appear
                ? "search-detail2 border-b-[2px] border-[black]"
                : "search2 border-[2px] border-[black]"
            }
          h-[40px] transition-all duration-400 ease-in-out flex flex-row justify-end`}
          >
            {appear3 ? (
              <div>
                <div className="flex gap-[10px]">
                  <button onClick={Input}>
                    <Exit />
                  </button>
                  <input
                    className=" outline-none w-[860px] rounded-[10px] mr-[10px] placeholder-[black] p-[3px]"
                    placeholder="Enter a dish name..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    // type="text"
                    onKeyPress={handleKeyPress}
                  />
                  <button>
                    <img className="w-[20px] h-[20px]" src="search.webp" />
                  </button>
                </div>
                <div className="mt-[10px] flex gap-none flex-col">
                  {searchedFood?.map((food, index) => (
                    <div onClick={() => pageJump(index)} className="flex bg-[#f9f9f9] w-auto h-auto p-[10px] items-center gap-[30px] border-[1px] border-[#cbcbcb] border-t-[0.5px] border-b-[0.5px]">
                      <img
                        className="w-[70px] h-[70px] rounded-[50%]"
                        src={food.imgSrc}
                      />
                      <h1
                        className="text-[#a8a8a8]"
                        
                      >
                        {food.foodName}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <button onClick={Input}>
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
      <img className="Logo" src="Logo.png" onClick={() => GoToHomePage()}></img>
      <div className="suggestRecipes">
        {suggestRecipes.map((food, index) => (
          <TopRecipe
            id={food?._id}
            imgSrc={food?.imgSrc}
            foodName={food?.foodName}
            index={index}
            SPageJump={SPageJump}
          />
        ))}
      </div>
      <div className="w-[1110px] h-[1px] bg-[#e8e8e8] mb-[40px]"></div>
      <div className="flex items-center flex-col justify-start">
        <h3 className="Super-delicious-text Category_text mr-[860px]">
          Popular Categories
        </h3>
        <div className="flex gap-[10px] p-[40px]">
          {categories.map((category) => (
            <Category food={category} />
          ))}
        </div>
      </div>
      <div className="super-delicious-container">
        <h1 className="popularRecipeText">Try some new tastes</h1>
        <div className="super-delicious-recipes">
          {tryNewRecipes.map((food, index) => (
            <TryNewRecipe
              id={food?._id}
              imgSrc={food?.imgSrc}
              foodName={food?.foodName}
              index={index}
              TPageJump={TPageJump}
              foodCreator={food?.foodCreator}
            />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <div className="upFooter-container">
          <div className="footer-text">
            <img className="footer-logo" src="Taste.png" />
            <h3 className="footer-text">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment"
            </h3>
          </div>
          <div className="columnText-container">
            <div className="firstColumn">
              <h2 className="columnTitle">Tastebite</h2>
              <p className="columnText">About us</p>
              <p className="columnText">Careers</p>
              <p className="columnText">Contact us</p>
              <p className="columnText">Feedback</p>
            </div>
            <div className="secondColumn">
              <h3 className="columnTitle">Legal</h3>
              <p className="columnText">Terms</p>
              <p className="columnText">Conditions</p>
              <p className="columnText">Cookies</p>
              <p className="columnText">Copyright</p>
            </div>
            <div className="thirdColumn">
              <h3 className="columnTitle">Follow</h3>
              <p className="columnText">Facebook</p>
              <p className="columnText">Twitter</p>
              <p className="columnText">Instagram</p>
              <p className="columnText">Youtube</p>
            </div>
          </div>
        </div>
        <div className="downFooter-container">
          <div className="copyRight-text">
            © 2020 Tastebite - All rights reserved
          </div>
          <div className="flex gap-[20px] justify-center items-center">
            <svg
              data-name="feather-icon/facebook"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect
                data-name="Bounding Box"
                width="20"
                height="20"
                fill="rgba(255,255,255,0)"
              ></rect>
              <path
                d="M6.667,18.333H3.333A.834.834,0,0,1,2.5,17.5V11.667H.833A.835.835,0,0,1,0,10.833V7.5a.834.834,0,0,1,.833-.833H2.5V5a5.006,5.006,0,0,1,5-5H10a.834.834,0,0,1,.833.833V4.167A.834.834,0,0,1,10,5H7.5V6.667H10A.833.833,0,0,1,10.808,7.7l-.833,3.334a.831.831,0,0,1-.809.631H7.5V17.5A.834.834,0,0,1,6.667,18.333Zm-5-10V10H3.333a.835.835,0,0,1,.834.833v5.834H5.833V10.833A.834.834,0,0,1,6.667,10h1.85l.416-1.667H6.667A.834.834,0,0,1,5.833,7.5V5A1.669,1.669,0,0,1,7.5,3.333H9.166V1.666H7.5A3.337,3.337,0,0,0,4.167,5V7.5a.835.835,0,0,1-.834.833Z"
                transform="translate(5 0.833)"
                fill="#7f7f7f"
              ></path>
            </svg>
            <svg
              data-name="feather-icon/instagram"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect
                data-name="Bounding Box"
                width="20"
                height="20"
                fill="rgba(255,255,255,0)"
              ></rect>
              <path
                d="M5,18.333a5.005,5.005,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0h8.333a5.005,5.005,0,0,1,5,5v8.333a5,5,0,0,1-5,5ZM1.667,5v8.333A3.337,3.337,0,0,0,5,16.667h8.333a3.337,3.337,0,0,0,3.333-3.333V5a3.337,3.337,0,0,0-3.333-3.334H5A3.338,3.338,0,0,0,1.667,5Zm4.59,7.076A4.164,4.164,0,1,1,9.2,13.3,4.161,4.161,0,0,1,6.256,12.076Zm.713-4.07a2.5,2.5,0,1,0,2.6-1.348A2.527,2.527,0,0,0,9.2,6.631,2.487,2.487,0,0,0,6.97,8.006Zm6.191-2.833a.833.833,0,1,1,.589.244A.834.834,0,0,1,13.161,5.173Z"
                transform="translate(0.833 0.833)"
                fill="#7f7f7f"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.004"
              height="20"
              viewBox="0 0 20.004 20"
            >
              <g data-name="feather-icon/twitter" transform="translate(0.002)">
                <rect
                  data-name="Bounding Box"
                  width="20"
                  height="20"
                  fill="rgba(255,255,255,0)"
                ></rect>
                <path
                  d="M6.894,16.644A13.387,13.387,0,0,1,.431,14.9a.834.834,0,0,1,.4-1.562H.869c.118,0,.237.007.354.007a8.925,8.925,0,0,0,3.708-.813,8.043,8.043,0,0,1-3.59-4.4A9.651,9.651,0,0,1,1.329,2.55a8.74,8.74,0,0,1,.412-1.214A.833.833,0,0,1,3.184,1.2,8.049,8.049,0,0,0,8.914,4.574l.255.023,0-.2A4.567,4.567,0,0,1,16.78,1.162a8.239,8.239,0,0,0,1.909-1,.827.827,0,0,1,.478-.155.852.852,0,0,1,.663.326.811.811,0,0,1,.149.707,7.28,7.28,0,0,1-1.662,3.145c.012.138.019.276.019.408a13.328,13.328,0,0,1-.922,4.987A11.157,11.157,0,0,1,6.894,16.644ZM2.839,3.378a7.847,7.847,0,0,0,.086,4.238,6.928,6.928,0,0,0,4.081,4.131.833.833,0,0,1,.13,1.451,10.505,10.505,0,0,1-3.025,1.414,10.962,10.962,0,0,0,2.786.367,9.566,9.566,0,0,0,6.869-2.807,10.5,10.5,0,0,0,2.9-7.576,2.817,2.817,0,0,0-.052-.538.834.834,0,0,1,.233-.75,5.6,5.6,0,0,0,.515-.583l-.285.1-.288.091a.831.831,0,0,1-.868-.25,2.9,2.9,0,0,0-5.088,1.953V5.45a.829.829,0,0,1-.812.833c-.084,0-.169,0-.253,0A9.659,9.659,0,0,1,6,5.525,9.669,9.669,0,0,1,2.839,3.378Z"
                  transform="translate(-0.002 1.658)"
                  fill="#7f7f7f"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.001"
              height="20"
              viewBox="0 0 20.001 20"
            >
              <g data-name="feather-icon/youtube" transform="translate(0)">
                <rect
                  data-name="Bounding Box"
                  width="20"
                  height="20"
                  fill="rgba(255,255,255,0)"
                ></rect>
                <path
                  d="M9.475,14.547,8.157,14.53c-.7-.013-1.348-.031-1.934-.053l-.592-.025a16.853,16.853,0,0,1-3.019-.316A3.189,3.189,0,0,1,.4,11.881,25.065,25.065,0,0,1,0,7.3,24.913,24.913,0,0,1,.408,2.681,3.168,3.168,0,0,1,2.618.411,17.815,17.815,0,0,1,5.8.089L6.887.049C7.536.029,8.205.016,8.876.008L9.8,0h.484L11.4.01c.584.007,1.173.02,1.748.036l.583.018a21.6,21.6,0,0,1,3.668.317A3.158,3.158,0,0,1,19.6,2.7,25.076,25.076,0,0,1,20,7.289a24.8,24.8,0,0,1-.408,4.58,3.164,3.164,0,0,1-2.209,2.269,16.78,16.78,0,0,1-3.014.315l-.592.025c-.586.023-1.237.041-1.934.053l-1.318.017ZM9.358,1.669c-.816.007-1.6.021-2.32.042l-1.109.04a18.192,18.192,0,0,0-2.868.266A1.468,1.468,0,0,0,2.037,3.031,23.455,23.455,0,0,0,1.667,7.3,23.669,23.669,0,0,0,2.018,11.5a1.488,1.488,0,0,0,1.031,1.024,18.758,18.758,0,0,0,2.977.273l.881.032c.374.011.793.022,1.282.031l1.3.017h1.026l1.3-.017c.488-.009.907-.019,1.282-.031l.881-.032.736-.035a14.14,14.14,0,0,0,2.228-.235,1.468,1.468,0,0,0,1.024-1.012,23.446,23.446,0,0,0,.37-4.232,23.255,23.255,0,0,0-.358-4.234,1.483,1.483,0,0,0-1.006-1.06,17.158,17.158,0,0,0-2.524-.232l-.776-.031c-.681-.023-1.453-.041-2.3-.053l-1.092-.009H9.8ZM7.545,10.616a.823.823,0,0,1-.254-.6V4.566a.835.835,0,0,1,.835-.834.822.822,0,0,1,.41.11l4.792,2.725a.833.833,0,0,1,0,1.449L8.537,10.74a.821.821,0,0,1-.411.111A.845.845,0,0,1,7.545,10.616ZM8.958,8.583l2.272-1.292L8.958,6Z"
                  transform="translate(0 2.501)"
                  fill="#7f7f7f"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
const TopRecipe = ({ id, imgSrc, foodName, index, SPageJump }) => {
  console.log("top recipe ", id);
  return (
    <div onClick={() => SPageJump(index)} className="suggesRecipe" key={id}>
      <img className="suggestRecipePhoto" src={imgSrc}></img>
      <div className="w-[100%] pl-[23.5px] mb-[29.5px] flex gap-[15px] flex-col">
        <h1 className="suggestRecipeName">{foodName}</h1>
      </div>
    </div>
  );
};
const TryNewRecipe = ({
  id,
  imgSrc,
  foodName,
  index,
  TPageJump,
  foodCreator,
}) => {
  console.log("try new recipe ", id);
  return (
    <div
      className="super-delicious-recipe"
      onClick={() => TPageJump(index)}
      key={id}
    >
      <img className="super-delicious-img" src={imgSrc}></img>
      <div className="delicious-recipe-description">
        <div className="star-name-profile">
          <h1 className="deliciousRecipe-name">{foodName}</h1>
        </div>
        <div className="user-name">
          <Profile></Profile>
          <h1 className="userName">{foodCreator}</h1>
        </div>
        <div className="calendar-like">
          <div className="calendar">
            <Calendar></Calendar>
            <h1 className="calendar-text">Yesterday</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
