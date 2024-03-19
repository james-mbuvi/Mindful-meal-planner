import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Preferenes() {
  const [preferences, setPreferences] = useState({
    dietary_preference: [],
    dietary_restriction: [],
    cuisine_preference: [],
    meal_type_preference: [],
  });

  const handleCheckboxChange = (event, category) => {
    const { value, checked } = event.target;
    setPreferences((prevState) => ({
      ...prevState,
      [category]: checked
        ? [...prevState[category], value]
        : prevState[category].filter((item) => item !== value),
    }));
  };

  return (
    <div className="display-flex ml-24 dark:bg-dm">
      <h1 className="text-center text-xl my-5">MEAL PLAN PREFERENCES</h1>

      <div className="my-5">
        <p>1. What is your dietery preferenes?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="vegetarian"
            name="dietary_preference"
            value="vegetarian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="vegetarian" className="mr-5">
            Vegetarian
          </label>

          <input
            type="checkbox"
            id="omnivore"
            name="dietary_preferance"
            value="omnivore"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="omnivore" className="mr-5">
            Omnivore
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="vegan"
            name="dietary_preference"
            value="vegan"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="vegan" className="mr-5">
            Vegan
          </label>

          <input
            type="checkbox"
            id="Pascaterian"
            name="dietary_preferance"
            value="Pascaterian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="Pascaterian" className="mr-5">
            Pascaterian
          </label>
        </div>
      </div>

      <div className="my-5">
        <p>2. Do you have any allergies or dietary restrictions?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="No allergies or restrictions"
            name="dietary_restrictions"
            value="No allergies or restrictions"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="No allergies or restrictions" className="mr-5">
            No allergies or restrictions
          </label>

          <input
            type="checkbox"
            id="Dairy-free"
            name="dietary_restrictions"
            value="Dairy-free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Dairy-free" className="mr-5">
            Dairy-free
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="Gluten-free"
            name="dietary_restrictions"
            value="Gluten-free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Gluten-free" className="mr-5">
            Gluten-free
          </label>

          <input
            type="checkbox"
            id="Nut free"
            name="dietary_restrictions"
            value="Nut free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Nut free" className="mr-5">
            Nut free
          </label>
        </div>
      </div>

      <div className="my-2">
        <p>3. Which cuisine do you prefer?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="Asian"
            name="cuisine_preference"
            value="Asian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preferences")}
          />
          <label for="Asian" className="mr-5">
            Asian
          </label>

          <input
            type="checkbox"
            id="Kenyan"
            name="cuisine_preference"
            value="Kenyan"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preferences")}
          />
          <label for="Kenyan" className="mr-5">
            Kenyan
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="Mexican"
            name="cuisine_preference"
            value="Mexican"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preferences")}
          />
          <label for="Mexican" className="mr-5">
            Mexican
          </label>

          <input
            type="checkbox"
            id="Mediterranean"
            name="cuisine_preference"
            value="Mediterranean"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preferences")}
          />
          <label for="Mediterranean" className="mr-5">
            Mediterranean
          </label>
        </div>
      </div>

      <div className="my-5">
        <p>4. Which of the following meal preferences best describes you?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="Prefers quick and easy meal"
            name="meal_type_preference"
            value="Prefers quick and easy meal"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preferences")}
          />
          <label for="Prefers quick and easy meal" className="mr-5">
            Prefers quick and easy meal
          </label>

          <input
            type="checkbox"
            id="Needs meals that are kid-friendly"
            name="meal_type_preference"
            value="Needs meals that are kid-friendly"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preferences")}
          />
          <label for="Needs meals that are kid-friendly" className="mr-5">
            Needs meals that are kid-friendly
          </label>
        </div>

        <div className="span">
          <input
            type="checkbox"
            id="Enjoys cooking elaborate meals"
            name="meal_type_preference"
            value="Enjoys cooking elaborate meals"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preferences")}
          />
          <label for="Enjoys cooking elaborate meals" className="mr-5">
            Enjoys cooking elaborate meals
          </label>

          <input
            type="checkbox"
            id="Require meals suitable for meal prep and batch cooking"
            name="meal_type_preference"
            value="Require meals suitable for meal prep and batch cooking"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preferences")}
          />
          <label
            for="Require meals suitable for meal prep and batch cooking"
            className="mr-5"
          >
            Require meals suitable for meal prep and batch cooking
          </label>
        </div>
      </div>

      <div className="display-flex ml-24 justify-center">
        <button className="bg-pickle p-6 py-3 rounded-xl">Submit</button>
      </div>
    </div>
  );
}

export default Preferenes;
