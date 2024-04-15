"use client";
import { useState } from "react";
import "./AddRecipe.css";
// import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [introductions, setIntroductions] = useState([]);
  const [newIntroduction, setNewIntroduction] = useState("");
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");

  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState("hzxyensd5");
  const [uploadPreset] = useState("aoh4fpwm");

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

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj9ewujce",
      apiKey: "325327348454615",
      apiSecret: "3r6jF5NQ5SOhqjrCi36jhoVQebA",
    },
  });

  const myImage = cld.image(publicId);

  console.log(myImage, publicId);

  return (
    <div>
      {" "}
      <div className="App">
        <h3>Cloudinary Upload Widget Example</h3>
        <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
        <div style={{ width: "800px" }}>
          <AdvancedImage
            style={{ maxWidth: "100%" }}
            cldImg={myImage}
            plugins={[responsive(), placeholder()]}
          />
        </div>
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
            <button onClick={handleAddIngredient} className="add-button">
              Add Ingredient
            </button>
          </div>
        </div>
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
            <button onClick={handleAddIntroduction} className="add-button">
              Add Introduction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
