import React from "react";

export const MealCard = ({ meal, onClick }) => {
  return (
    <div
      className="bg-gray-200 p-4 rounded-md cursor-pointer"
      onClick={() => onClick(meal)}
    >
      <img
        src={meal.image}
        alt={meal.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-1">{meal.title}</h3>
        <p className="text-gray-600 mb-1">Prep Time: {meal.prepTime} mins</p>
        <p className="text-gray-600 mb-1">Serving Size: {meal.servingSize}</p>
        <p className="text-gray-600 mb-1">Meal Time: {meal.mealTime}</p>
      </div>
    </div>
  );
};


