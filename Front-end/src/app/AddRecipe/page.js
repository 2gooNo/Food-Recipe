"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddRecipe.css";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";

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

  useEffect(() => {
    getAllFoodCategories();
  }, []);

  const getAllFoodCategories = async () => {
    try {
      const response = await axios.get("/api/food");
      setFoodCategories(response.data.foods);
    } catch (error) {
      console.error("Error fetching food categories:", error);
    }
  };

  const handleSearch = () => {
    const filteredCategories = foodCategories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredCategories;
  };

  const uwConfig = {
    cloudName,
    uploadPreset,
  };

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
          <div style={{ width: "800px" }}>
            <img src={uploadedUrl} alt="Uploaded" />
          </div>
        )}
      </div>
      <div className="add-recipe-container">
        <h1 className="add-recipe-title">Add Recipe</h1>
        <div className="ingredient-list">
          <div className="input-container">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>
          <div className="input-container">
            <label htmlFor="foodName">Food Name:</label>
            <input
              type="text"
              id="foodName"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="Enter food name"
            />
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
            <button  className="add-button">
              Add Ingredient
            </button>
          </div>
        </div>
        <div className="introduction-list">
          <div className="introduction-list">
            <h2 className="introduction-list-title">Introductions</h2>
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
                placeholder="Enter introduction"
                className="introduction-input"
              />
              <button className="add-button">
                Add Introduction
              </button>
            </div>
          </div>
        </div>
        <div className="food-search">
          <input
            type="text"
            placeholder="Search for food category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul className="food-categories">
          {foodCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
