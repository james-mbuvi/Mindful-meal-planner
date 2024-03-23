
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

    // Fetch meal data from API based on mealId

  return (
    <div>
      <h1>{meal.title}</h1>
      <img src={meal.image} alt={meal.title} />
      <h2>Ingredients:</h2>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Recipe:</h2>
      <ol>
        {meal.recipe.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h2>Nutrition:</h2>
      <ul>
        {Object.entries(meal.nutrition).map(([nutrient, value]) => (
          <li key={nutrient}>
            <strong>{nutrient}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePage;
