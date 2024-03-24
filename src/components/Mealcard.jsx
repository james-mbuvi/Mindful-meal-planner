import { Link } from 'react-router-dom';

export const MealCard = ({ meal }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-md mx-4 md:mx-10 lg:mx-20 xl:mx-28 dark:bg-dm">
      <img
        src={meal.image}
        alt={meal.title}
        className="w-full h-33 object-cover rounded-md mb-2"
      />
      <div className="text-center mb-1">
        <h3 className="font-semibold text-lg">{meal.title}</h3>
        <p className="text-sm md:text-base lg:text-lg">
          Meal Time: {meal.time}
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-5">
          Serving Size: {meal.serves}
        </p>
        <Link to={`/recipe/${meal.id}`} className="hover:cursor-pointer bg-pickle p-3 mt-4 mb-4 py-2 rounded-xl">Get Recipe</Link>
      </div>
    </div>
  );
};