import React, {useState, useEffect} from 'react'
import Days_of_the_week from '../../components/Days_of_the_week';
import { MealCard } from '../../components/Mealcard';
import { Link } from 'react-router-dom';



export const Mealplanner = () => {
     const [meals, setMeals] = useState([]);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchMeals = async () => {
         try {
           const response = await fetch("http://localhost:8000/meal/");
           if (!response.ok) {
             throw new Error("Failed to fetch data");
           }
           const data = await response.json();
           setMeals(data);
         } catch (error) {
           setError(error.message);
         }
       };

       fetchMeals();
     }, []);

      if (error) {
        return <div>Error: {error}</div>;
      }
    
   

    const [selectedDay, setSelectedDay] = useState(null);

    const daysOfWeek = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
      const handleDayClick = (day) => {
        setSelectedDay(day);
        
      };
  const mealTime = ["Morning", "Lunch", "Super"]
  const filteredMeals = meals.filter(meal => mealTime.includes(meal.time));
   
  return (
    <div className="dark:bg-dm text-dm dark:text-white">
      <h1 className="font-bold text-center text-2xl underline text-lg">My Meal Plan</h1>
      <Days_of_the_week days={daysOfWeek} onClick={handleDayClick} />
      <div className="grid grid-cols-3 gap-3">
        <Link to="/Recipe">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </Link>
      </div>
    </div>
  );
}

//repsonsivness of the days of the week
// generating an ordered meal plan 
//generating only 3 meal plans and not everything
// the meal plans to be same width as the days of the week
// generating random meal plans for different days

