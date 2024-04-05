"use client";

import styles from "./style.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Calendar } from "../../assets/icons/calendar";
import { Like } from "../../assets/icons/like";
import { Comment } from "../../assets/icons/comment";
import { Back_End_Url } from "../../../back-url";
import { Search } from "@/assets/icons/search";
import { FacebookBlack } from "@/assets/icons/facebookBlack";
import { TwitterBlack } from "@/assets/icons/twitterBlack";
import { InstagramBlack } from "@/assets/icons/instagramBlack";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [foods, setFoods] = useState([]);
  const [top, setTop] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const foodData = await axios.get(`${Back_End_Url}/getAllFood`);

    topThree(foodData);
    setFoods(foodData);
  };

  const topThree = (foodData) => {
    const recipeLikes = [];
    const topRecipes = [];

    foodData?.data?.foods.map((food) => recipeLikes.push(food.like));

    const sortedLikes = recipeLikes.sort((a, b) => a - b);

    const topLikes = sortedLikes.slice(-3);

    foodData?.data?.foods.map((food) => {
      if (topLikes.includes(food.like)) {
        topRecipes.push(food);
      }
    });

    setTop(topRecipes);
  };


  useEffect(() => {
    fetchData();
  }, []);

  function pageJump(index) {
    const recipeId = top?.[index]._id;
    console.log(recipeId);

    router.push(`/RecipePage?recipeId=${recipeId}`);
  }
  return (
    <div className="body">
      <div className="topNav">
        <div className="navSocial">
          <FacebookBlack></FacebookBlack>
          <TwitterBlack></TwitterBlack>
          <InstagramBlack></InstagramBlack>
        </div>
        <div className="Selection-Icon">
          <button className="navbarSelection">Pages</button>
          <img className="downward-icon" src="downwardPointerIcon.png"></img>
        </div>
        <img className="userImg"></img>
        <Search></Search>
      </div>
      <img className="Logo" src="Logo.png"></img>
      <div className="suggestRecipes" >
        {top.map((food, index) => (
          <TopRecipe
            id={food._id}
            imgSrc={food.imgSrc}
            foodName={food.foodName}
            index={index}
            pageJump={pageJump}
          />
        ))}
      </div>
      <div className="w-[1110px] h-[1px] bg-[#e8e8e8] mb-[40px]">
        <div></div>
      </div>
      <div className="w-[1110px] h-[285px] flex flex-col  gap-[40.5px] mb-[96px]">
        <h1 className="popularRecipeText">Popular Categories</h1>
        <div className="flex gap-[30px]">
          <div className="flex flex-col items-center ">
            <img src="recipe3Img.png"></img>
            <h1 className="popularRecipeName">Pasta</h1>
          </div>
          <div className="flex flex-col items-center ">
            <img src="recipe4Img.png"></img>
            <h1 className="popularRecipeName">Pizza</h1>
          </div>
          <div className="flex flex-col items-center ">
            <img src="recipe5Img.png"></img>
            <h1 className="popularRecipeName">Vegan</h1>
          </div>
          <div className="flex flex-col items-center ">
            <img src="recipe6Img.png"></img>
            <h1 className="popularRecipeName">Desserts</h1>
          </div>
          <div className="flex flex-col items-center ">
            <img src="recipe7Img.png"></img>
            <h1 className="popularRecipeName">Smoothies</h1>
          </div>
          <div className="flex flex-col items-center ">
            <img src="recipe8Img.png"></img>
            <h1 className="popularRecipeName">Breakfast</h1>
          </div>
        </div>
      </div>
      <div className="super-delicious-container">
        <h1 className="Super-delicious-text">Super Delicious</h1>
        <div className="super-delicious-recipes">
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <Calendar></Calendar>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <Calendar></Calendar>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <Calendar></Calendar>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="14.666"
                    viewBox="0 0 13.333 14.666"
                  >
                    <path
                      id="Shape"
                      d="M2,14.666a2,2,0,0,1-2-2V3.333a2,2,0,0,1,2-2H3.334V.667a.667.667,0,0,1,1.333,0v.667h4V.667A.667.667,0,0,1,10,.667v.667h1.333a2,2,0,0,1,2,2v9.334a2,2,0,0,1-2,2Zm-.667-2A.667.667,0,0,0,2,13.333h9.334A.667.667,0,0,0,12,12.667v-6H1.333ZM12,5.333v-2a.667.667,0,0,0-.667-.667H10v.667a.667.667,0,0,1-1.334,0V2.666h-4v.667a.667.667,0,1,1-1.333,0V2.666H2a.667.667,0,0,0-.667.667v2Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="14.666"
                    viewBox="0 0 13.333 14.666"
                  >
                    <path
                      id="Shape"
                      d="M2,14.666a2,2,0,0,1-2-2V3.333a2,2,0,0,1,2-2H3.334V.667a.667.667,0,0,1,1.333,0v.667h4V.667A.667.667,0,0,1,10,.667v.667h1.333a2,2,0,0,1,2,2v9.334a2,2,0,0,1-2,2Zm-.667-2A.667.667,0,0,0,2,13.333h9.334A.667.667,0,0,0,12,12.667v-6H1.333ZM12,5.333v-2a.667.667,0,0,0-.667-.667H10v.667a.667.667,0,0,1-1.334,0V2.666h-4v.667a.667.667,0,1,1-1.333,0V2.666H2a.667.667,0,0,0-.667.667v2Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <h1 className="deliciousRecipe-name">
                  Loaded Mixed Berries Mini Tarts
                </h1>
              </div>
              <div className="user-name">
                <img src="profile.png"></img>
                <h1 className="userName">Tricia Albert</h1>
              </div>
              <div className="calendar-like">
                <div className="calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="14.666"
                    viewBox="0 0 13.333 14.666"
                  >
                    <path
                      id="Shape"
                      d="M2,14.666a2,2,0,0,1-2-2V3.333a2,2,0,0,1,2-2H3.334V.667a.667.667,0,0,1,1.333,0v.667h4V.667A.667.667,0,0,1,10,.667v.667h1.333a2,2,0,0,1,2,2v9.334a2,2,0,0,1-2,2Zm-.667-2A.667.667,0,0,0,2,13.333h9.334A.667.667,0,0,0,12,12.667v-6H1.333ZM12,5.333v-2a.667.667,0,0,0-.667-.667H10v.667a.667.667,0,0,1-1.334,0V2.666h-4v.667a.667.667,0,1,1-1.333,0V2.666H2a.667.667,0,0,0-.667.667v2Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="calendar-text">Yesterday</h1>
                </div>
              </div>
            </div>
          </div>
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
const TopRecipe = ({ id, imgSrc, foodName, index, pageJump }) => {
  return (
    <div onClick={() => pageJump(index)} className="suggesRecipe" key={id}>
      <img className="suggestRecipePhoto" src={imgSrc}></img>
      <div className="w-[100%] pl-[23.5px] mb-[29.5px] flex gap-[15px] flex-col">
        <h1 className="suggestRecipeName">{foodName}</h1>
      </div>
    </div>
  );
};
