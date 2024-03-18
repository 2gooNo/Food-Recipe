import styles from "./style.css";

export default function HomePage() {
  return (
    <div className="body">
      <img src="Logo.png"></img>
      <div className="navBar">
        <img className="SearchIcon" src="SearchIcon.png"></img>
        <div className="navTexts">
          <div className="Selection-Icon">
            <button className="navbarSelection">Home Page</button>
            <img className="downward-icon" src="downwardPointerIcon.png"></img>
          </div>
          <div className="Selection-Icon">
            <button className="navbarSelection">Recipe Page</button>
            <img className="downward-icon" src="downwardPointerIcon.png"></img>
          </div>
          <div className="Selection-Icon">
            <button className="navbarSelection">Pages</button>
            <img className="downward-icon" src="downwardPointerIcon.png"></img>
          </div>
          <div className="Selection-Icon">
            <button className="navbarSelection">Buy</button>
            <img className="downward-icon" src="downwardPointerIcon.png"></img>
          </div>
        </div>
        <img className="navMenuIcon" src="MenuIcon.png"></img>
      </div>
      <div className="suggestRecipes">
        <div className="suggesRecipe">
          <img className="suggestRecipePhoto" src="recipeImg.jpg"></img>
          <div className="w-[100%] pl-[23.5px] mb-[29.5px] flex gap-[15px] flex-col">
            <div className="flex gap-[5px]">
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
            </div>
            <h1 className="suggestRecipeName">
              Very Berry Healthy Summer Smoothie
            </h1>
          </div>
        </div>
        <div className="suggesRecipe">
          <img className="suggestRecipePhoto" src="recipe1Img.jpg"></img>
          <div className="w-[100%] pl-[23.5px] pr-[62px] mb-[29.5px] flex gap-[15px] flex-col">
            <div className="flex gap-[5px]">
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
            </div>
            <h1 className="suggestRecipeName">Creamy Carrot and Ginger Soup</h1>
          </div>
        </div>
        <div className="suggesRecipe">
          <img className="suggestRecipePhoto" src="recipe2Img.jpg"></img>
          <div className="w-[100%] pl-[23.5px] pr-[62px] mb-[29.5px] flex gap-[15px] flex-col">
            <div className="flex gap-[5px]">
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
              <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
            </div>
            <h1 className="suggestRecipeName">
              Loaded Mixed Berries Mini Tarts
            </h1>
          </div>
        </div>
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
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="super-delicious-recipe">
            <img className="super-delicious-img" src="recipe9Img.jpg"></img>
            <div className="delicious-recipe-description">
              <div className="star-name-profile">
                <div className="fiveStar-container">
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                  <img src="starIcon.png" className="w-[14.5px] h-[15px]"></img>
                </div>
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
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333"
                    height="13.335"
                    viewBox="0 0 13.333 13.335"
                  >
                    <path
                      id="Shape"
                      d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  <h1 className="like-text">456</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curratedCollections-container">
        <h1 className="curratedCollections-title">Curated Collections</h1>
        <div className="collections">
          <div className="collection-row">
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi Combos for your Next Party
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
          </div>
          <div className="collection-row">
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi 
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi Combos for your Next Party
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
          </div>
          <div className="collection-row">
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi Combos for your Next Party
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
            <div className="collection">
              <img className="collection-img" src="collection.jpg"></img>
              <div className="collection-description">
                <p className="collection-title">
                  Sushi
                </p>
                <div className="recipeNumber">156 Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
