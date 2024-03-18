import { LuSalad } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidSearchAlt2 } from "react-icons/bi";

export default function Homepage() {
    return (
        <div>
            <div className="flex">
                <img src="food-image.jpg" alt="Food" />
                <div>
                    <h1>From chaotic kitchen to culinary Bliss:</h1>
                    <p>Let our Meal Planner Revolutionize your Routine!</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="">
                    <LuSalad />
                    <p>Nutritional Convenience</p>
                    <p>Enjoy the ease of planning balanced meals tailored to your nutritional needs...</p>
                </div>
                <div className="">
                    <TbTargetArrow />
                    <p>Personalized Guidance</p>
                    <p>Receive personalized meal recommendations and expert guidance...</p>
                </div>
                <div className="">
                    <BiSolidSearchAlt2 />
                    <p>Culinary Inspiration</p>
                    <p>Unleash your creativity in the kitchen with a wealth of delicious recipes...</p>
                </div>
            </div>
        </div>
    );
}