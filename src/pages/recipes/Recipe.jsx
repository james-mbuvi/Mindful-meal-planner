import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8000/meal/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-page">
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-details">
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Recipe:</h2>
        <ol>
          {recipe.recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <h2>Nutrition:</h2>
        <ul>
          {Object.entries(recipe.nutrition).map(([nutrient, value]) => (
            <li key={nutrient}>
              <strong>{nutrient}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


