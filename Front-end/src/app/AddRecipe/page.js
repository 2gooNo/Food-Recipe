"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddRecipe.css";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { useRouter } from "next/navigation";
import { Back_End_Url } from "../../../back-url";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [introductions, setIntroductions] = useState([]);
  const [newIntroduction, setNewIntroduction] = useState("");
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState("hzxyensd5");
  const [uploadPreset] = useState("aoh4fpwm");
  const [foodCategories, setFoodCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState();
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories");
      setFoodCategories(response.data);
      console.log(response.data);
      const token = localStorage.getItem("token");
      if (token == null) {
        router.push("LogInPage");
      } else {
        const data = await axios.get("http://localhost:8000/getUser", {
          headers: { token },
        });
        setUserData(data);
      }
    } catch (error) {
      console.error("Error fetching food categories:", error);
    }
  };
  const uwConfig = {
    cloudName,
    uploadPreset,
  };

  const handlePush = async () => {
    try {
      const response = await axios.post(`${Back_End_Url}/createFood`, {
        imgSrc: uploadedUrl,
        instruction: introductions,
        foodName: foodName,
        category: category,
        recipes: recipe,
        foodCreator: userData?.data?.user?.userName,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error pushing data:", error);
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setRecipe([...recipe, newIngredient]);
      setNewIngredient("");
    }
  };
  const handleRemoveIngredient = (index) => {
    const updatedRecipe = [...recipe];
    updatedRecipe.splice(index, 1);
    setRecipe(updatedRecipe);
  };

  const handleAddIntroduction = () => {
    if (newIntroduction.trim() !== "") {
      setIntroductions([...introductions, newIntroduction]);
      setNewIntroduction("");
    }
  };
  const handleRemoveIntroduction = (index) => {
    const updatedIntroductions = [...introductions];
    updatedIntroductions.splice(index, 1);
    setIntroductions(updatedIntroductions);
  };
  function GoToHomePage() {
    router.push("/HomePage");
  }
  // console.log(foodCategories);
  return (
    <div class="body">
  <div class="App">
    <CloudinaryUploadWidget
      uwConfig={uwConfig}
      setUrl={setUploadedUrl}
      setPublicId={setPublicId}
    />
    {uploadedUrl && (
      <div style={{ width: "500px" }}>
        <img src={uploadedUrl} alt="Uploaded" />
      </div>
    )}
  </div>
  <div class="add-recipe-container">
    <div class="input-container">
      <label htmlFor="foodName">Food Name:</label>
      <input
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Enter food name"
        className="foodname"
      />
    </div>
    <div class="input-container">
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Select category"
      >
        <option value="">Select category</option>
        {foodCategories.map((category, index) => (
          <option key={index} value={category}>
            {category.category}
          </option>
        ))}
      </select>
    </div>
    <div class="add-recipe-content">
      <h1 class="add-recipe-title">Add Recipe</h1>
      <div class="ingredient-list">
        <h2 class="ingredient-list-title">Recipe</h2>
        <ul class="ingredients">
          {recipe.map((ingredient, index) => (
            <li key={index} class="ingredient">
              <span>{ingredient}</span>
              <button
                onClick={() => handleRemoveIngredient(index)}
                class="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div class="add-ingredient">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            placeholder="Enter ingredient"
            class="ingredient-input"
          />
          <button class="add-button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
      </div>
      <div class="introduction-list">
        <h2 class="introduction-list-title">Instructions</h2>
        <ul class="introductions">
          {introductions.map((introduction, index) => (
            <li key={index} class="introduction">
              <span>{introduction}</span>
              <button
                onClick={() => handleRemoveIntroduction(index)}
                class="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div class="add-introduction">
          <input
            type="text"
            value={newIntroduction}
            onChange={(e) => setNewIntroduction(e.target.value)}
            placeholder="Enter instruction"
            class="introduction-input"
          />
          <button class="add-button" onClick={handleAddIntroduction}>
            Add Instruction
          </button>
        </div>
      </div>
    </div>
    <div className="submit-center">    <button onClick={handlePush} class="submit-button">
      Submit
    </button></div>

  </div>
</div>

  );
}
