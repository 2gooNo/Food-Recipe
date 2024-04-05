"use client";
import Image from "next/image";
import styles from "./style.css";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const RecipePage = ({ params }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [strikeThroughCSS, setStrikeThroughCSS] = useState({});
  const { id } = params;

  const fetchRecipe = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/getFood/66013c058b21b336ef0c90cb`
      );
      setRecipeData(data.findFood);
    } catch (error) {
      console.error("error");
    }
  };
  console.log(recipeData);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const toggleStrikeThrough = useCallback((index) => {
    setStrikeThroughCSS((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }, []);

  return (
    <div className="w-full height-full">
      {[recipeData].map((index) => (
        <div className=" flex flex-col items-center" key={index}>
          {/* header start  */}
          <div className="flex justify-between mt-[30px] w-[1100px]">
            <img src="logo.png" width={140} height={50} />
            <div className="flex justify-center gap-[90px] font-semibold items-center">
              <p>HomePage</p>
              <p>Recipe Page</p>
              <p>Pages</p>
              <p>Buy</p>
            </div>
            <div className="flex gap-[40px]">
              <Image
                src={"search.svg"}
                width={0}
                height={0}
                alt="search"
                className="w-[30px] h-auto"
              />
              <Image
                src={"/profile.svg"}
                width={45}
                height={45}
                alt="profile picture"
              />
            </div>
          </div>
          {/* header end  */}
          <div className="flex ml-[355px]">
            <div className="flex justify-end gap-[40px] mt-[90px] mr-[350px] w-[1100px]">
              <Image
                src={"download.svg"}
                height={0}
                width={0}
                alt="download"
                className="w-[30px] h-[35px]"
              />
              <Image
                src={"save.svg"}
                height={0}
                width={0}
                alt="save"
                className="w-[40px] h-[35px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-[1100px] ">
            <h1 className="text-6xl font-bold mt-[50px]">
              {recipeData?.foodName}
            </h1>
            <div className="flex mt-[30px] items-center">
              <Image
                src={"/profile.svg"}
                width={45}
                height={45}
                alt="profile picture 2"
              />
              <p className=" mr-[40px]">{recipeData?.foodCreator}</p>
              <Image
                src={"calendar.svg"}
                width={0}
                height={0}
                alt="calendar"
                className="w-[18px] h-auto"
              />
              <p className=" mr-[40px] ml-[10px]">Yesterday</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[20px] pt-[30px] w-[1100px] border-solid border-t border-gray-250">
            <p className="pb-[40px]">
              One thing I learned living in the Canarsie section of Brooklyn, NY
              was how to cook a good Italian meal. Here is a recipe I created
              after having this dish in a restaurant. Enjoy!
            </p>
            <img
              src={recipeData.imgSrc}
              height={0}
              width={0}
              alt="Strawberry Cheesecake"
              className="w-[1100px] h-auto rounded-xl"
            />
          </div>
          {/* ingredient + nutrition facts + instructions start  */}
          <div className="flex">
            {/* ingredient + nutrition facts start */}
            <div className="mr-[250px]">
              {/* ingredients start  */}
              <div className="mt-[60px]">
                <h1 className="text-3xl font-semibold pb-[30px]">
                  Ingredients
                </h1>
                {recipeData.recipes?.map((rec, index) => (
                  <div className="flex flex-col gap-[10px]" key={index}>
                    <div className="flex gap-2 pt-[20px] mb-[15px]">
                      <input
                        type="checkbox"
                        className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                        id={`ingredient-${index}`}
                        onClick={() => toggleStrikeThrough(index)}
                      />
                      <img
                        src="checkMark.svg"
                        className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                      />
                      <label
                        htmlFor={`ingredient-${index}`}
                        style={{
                          textDecoration: strikeThroughCSS[index]
                            ? "line-through"
                            : "none",
                          color: strikeThroughCSS[index] ? "GrayText" : "none",
                        }}
                      >
                        {rec.size} {rec.recipe}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {/* Ingredients end  */}
              {/* nutrition facts start  */}
              <div className="bg-gray-100 rounded-xl p-7 mt-[70px]">
                <h1 className="text-3xl font-semibold pb-[20px]">
                  Nutrition Facts
                </h1>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-between gap-[200px] border-b-2 border-solid border-gray-200">
                    <p className="text-gray-500">Calories</p>
                    <p>219,9</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Total Fat</p>
                    <p>10,7 g</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Saturated Fat</p>
                    <p>2,2 g</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Cholesterol</p>
                    <p>37,4 mg</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Sodium</p>
                    <p>120,3 mg</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Potassium</p>
                    <p>32,8 mg</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Total Carbohydrate</p>
                    <p>22.3g</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Sugars</p>
                    <p>8,4 g</p>
                  </div>
                  <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                    <p className="text-gray-500">Protein</p>
                    <p>7,9 g</p>
                  </div>
                </div>
              </div>
              {/* nutrition facts end  */}
            </div>
            {/* ingredient + nutrition facts end  */}
            {/* instructions start  */}

            <div className="w-[500px] flex flex-col gap-[30px] mt-[65px]">
              <h1 className="text-3xl">Instructions</h1>
              {recipeData.instruction?.map((inst, index) => (
                <div className="flex gap-[25px] mt-[15px]">
                  <div className="max-w-6 max-h-6">
                    <p className="bg-orange-600 w-6 h-6 rounded-3xl text-center text-white">
                      {index}
                    </p>
                  </div>
                  <p>{inst}</p>
                </div>
              ))}
            </div>
            {/* instructions end  */}
          </div>
          {/* ingredient + nutrition facts + instructions end  */}
          {/* suggestion start  */}
          <div className="flex flex-col w-[1100px] mb-[80px]">
            <h1 className="text-4xl font-semibold mb-[40px] mt-[40px]">
              You might also like
            </h1>
            <div className="flex grid grid-cols-4 gap-[15px] gap-y-[40px] font-semibold break-words text-[18px]">
              <div className=" hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] overflow-hidden bg-cover">
                  <img
                    src="cranberry.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110 "
                  />
                </div>
                <h1 className="pt-[10px]">Cranberry Macaroon Ice Cream Cake</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="noBakeCk.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">No Bake Cheesecake</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="spongeCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">Double Thick Layered Sponge Cake</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="glazeCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">Caramel Glaze Cake</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="creamCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">Strawberry Cream Cake Bites</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="weddingCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">
                  Homemade Mixed Berries Wedding Cake
                </h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="chocolateCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">M&M's Chocolate Cake</h1>
              </div>
              <div className="hover:text-orange-500 cursor-pointer">
                <div className="max-w-[250px] bg-cover overflow-hidden">
                  <img
                    src="cinnamonCake.jpg"
                    className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h1 className="pt-[10px]">Almond Cinnamon Sponge Cake</h1>
              </div>
            </div>
          </div>
          {/* suggestion end  */}
        </div>
      ))}
      {/* footer start  */}
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
      {/* footer end  */}
    </div>
  );
};
export default RecipePage;
