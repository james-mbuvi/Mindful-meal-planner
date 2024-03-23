import React, { useState, useEffect } from "react";
import Days_of_the_week from "../components/Days_of_the_week";
import { useNavigate } from "react-router-dom";


function Mealplanner() {
  const navigate = useNavigate();

  // Start of navigation functionality
  const handleRecipeClick = async (recipeId) => {
    try {
      navigate(`/recipe/${recipeId}`);
    } catch (error) {
      console.error("Error navigating to recipe:", error);
    }
  };

  // Start of functionality for fetching meal plan for selected day
  const [selectedDay, setSelectedDay] = useState(null);
  const [mealData, setMealData] = useState([]);
  const daysOfWeek = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];

  const handleDayClick = async (day) => {
    setSelectedDay(day);

    try {
      const response = await fetch(`api_endpoint/${day}`);

      if (!response.ok) {
        throw new Error("Failed to fetch meal plans");
      }

      const mealPlans = await response.json();
      console.log(mealPlans);
      setMealData(mealPlans); // Set fetched meal plans
    } catch (error) {
      console.error("Error fetching meal plans:", error.message);
    }
  };
  // End of the fetching meal plan logic

  return (
    <div>
      <h1 className="font-bold text-center text-lg underline mt-2">
        MY MEAL PLAN
      </h1>
      <Days_of_the_week days={daysOfWeek} onClick={handleDayClick} />
      {/* Render meal cards using mealData */}
      {mealData.map((meal, index) => (
        <div key={index}>{/* Render meal card components here */}</div>
      ))}
    </div>
  );
}

export default Mealplanner;
