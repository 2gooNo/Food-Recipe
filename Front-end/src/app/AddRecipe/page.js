"use client"

import { useState } from "react";
import "./AddRecipe.css"

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  return (
    <div className="add-recipe-container">
      <h1 className="add-recipe-title">Add Recipe</h1>
      <div className="ingredient-list">
        <h2 className="ingredient-list-title">Ingredients</h2>
        <ul className="ingredients">
          {ingredients.map((ingredient, index) => (
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
    </div>
  );
};

export default AddRecipe;
