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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row  dark:bg-dm text-dm dark:text-white">
      
      <div className="lg:w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">{recipe.title}</h1>
        <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mb-2">Recipe:</h2>
        <ol className="list-decimal list-inside mb-4">
          {recipe.recipe.map((step, index) => (
            <li classname="mb-3"key={index}>{step}</li>
          ))}
        </ol>
        <div className="bg-pickle rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2 mt-3">Nutritional Values</h2>
        
          <p><span className="font-bold">Calories:</span> {recipe.nutrition.Calories}</p>
          <p><span className="font-bold">Fat:</span> {recipe.nutrition.Fat}</p>
          <p><span className="font-bold">Carbs:</span> {recipe.nutrition.Carbs}</p>
          <p><span className="font-bold">Protein:</span> {recipe.nutrition.Protein}</p>
        </div>
      </div>
      <div className="w-1/2 ">
        <img src={recipe.image} alt={recipe.title} className="w-full" />
      </div>
    </div>
  );
};
