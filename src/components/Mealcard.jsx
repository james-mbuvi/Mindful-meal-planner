export const MealCard = ({ meal }) => {
  return (
    <div className="bg-white p-6 rounded-md mx-4 md:mx-10 lg:mx-20 xl:mx-28 dark:bg-dm">
      <img
        src={meal.image}
        alt={meal.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <div className="text-center mb-1">
        <h3 className="font-semibold text-lg">{meal.title}</h3>
        <p className="text-sm md:text-base lg:text-lg">
          Meal Time: {meal.time}
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          Serving Size: {meal.serves}
        </p>
        <button className="hover:cursor-pointer">Get Recipe</button>
      </div>
    </div>
  );
};