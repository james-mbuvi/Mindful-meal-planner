import { Link } from 'react-router-dom';

export const MealCard = ({ meal }) => {
  return (
    <div className="p-4 pb-8 shadow-xl dark:shaddow-2xl rounded hover:shadow transition-all duration-300 cursor-pointer">
      <img
        src={meal.image}
        alt={meal.title}
        className="rounded-lg mb-4 w-full size-96"
      />
      <div className="text-center mb-1">
      <div className="flex items-center justify-center  mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold lg:text-2xl dark:text-white">
                  <h3 className="font-semibold text-xl text-center dark:text-pickle-lg ">{meal.title}</h3>

                  </div>
                </div>
        
        <p className="text-sm md:text-base lg:text-lg">
          Meal Time: {meal.time}
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-5">
          Serving Size: {meal.serves}
        </p>
        <Link to={`/recipe/${meal.id}`} className="my-2 uppercase w-56 hover:bg-pickle text-white bg-pickle-lg  dark:bg-white dark:text-pickle font-medium py-3 px-10 ring-1  ring-cb hover:ring-darkcherry dark:hover:bg-babypink hover:bg-babypink hover:text-darkcherry rounded-full dark ">Get Recipe</Link>
      </div>
    </div>
  );
};