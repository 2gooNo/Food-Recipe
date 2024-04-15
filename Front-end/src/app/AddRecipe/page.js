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
  const [userData,setUserData] = useState()
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories");
      setFoodCategories(response.data);
      console.log(response.data);
      const token = localStorage.getItem("token")
      if(token == null){
        router.push("LogInPage")
      }else{
        const data = await axios.get("http://localhost:8000/getUser",{
          headers:{token},
        })
        setUserData(data)
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
        foodCreator:userData?.data?.user?.userName
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
  // console.log(foodCategories);
  return (
    <div>
      <div className="App">
        <h3>Cloudinary Upload Widget Example</h3>
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
      <div className="add-recipe-container">
        <h1 className="add-recipe-title">Add Recipe</h1>
        <div className="ingredient-list">
          <div>
            <h1>Food Name</h1>
            <input onChange={(e) => setFoodName(e.target.value)} placeholder="Enter food name"/>
          </div>
          <div className="input-container">
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
          <h2 className="ingredient-list-title">Recipe</h2>
          <ul className="ingredients">
            {recipe.map((ingredient, index) => (
              <li key={index} className="ingredient">
                <span>{ingredient}</span>
                <button
                  onClick={() => handleRemoveIngredient(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="add-ingredient">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="Enter ingredient"
              className="ingredient-input"
            />
            <button className="add-button" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          </div>
        </div>
        <div className="introduction-list">
          <div className="introduction-list">
            <h2 className="introduction-list-title">Instructions</h2>
            <ul className="introductions">
              {introductions.map((introduction, index) => (
                <li key={index} className="introduction">
                  <span>{introduction}</span>
                  <button
                    onClick={() => handleRemoveIntroduction(index)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="add-introduction">
              <input
                type="text"
                value={newIntroduction}
                onChange={(e) => setNewIntroduction(e.target.value)}
                placeholder="Enter instruction"
                className="introduction-input"
              />
              <button className="add-button" onClick={handleAddIntroduction}>
                Add Instruction
              </button>
            </div>
          </div>
        </div>
        <button onClick={handlePush} className="add-button">
          submit
        </button>
      </div>
    </div>
  );
}
