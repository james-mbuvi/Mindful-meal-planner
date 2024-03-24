import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8000/meal/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredients:</h2>
      <ol className="list-decimal list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
      <h2>Recipe:</h2>
      <ol className="list-decimal list-inside">
        {recipe.recipe.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h2>Nutritional Values</h2>
      <p>Calories: {recipe.nutrition.Calories}</p>
      <p>Fat: {recipe.nutrition.Fat}</p>
      <p>Carbs: {recipe.nutrition.Carbs}</p>
      <p>Protein: {recipe.nutrition.Protein}</p>
    </div>
  );
};