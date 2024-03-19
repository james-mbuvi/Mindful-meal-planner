import { LuSalad } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import home from "../../assets/home.jpg"

export default function Homepage() {
    return (
        <div className="px-14 ">
            <div className="flex">
                <div className="flex flex-col">
                    <h1 className="text-[40px]">From chaotic kitchen to culinary Bliss:</h1>
                    <p className="text-[25px]">Let our Meal Planner Revolutionize your<br />Routine!</p>
                    <button className="text-[18px] bg-pickle text-white px-">Get Started</button>
                </div>
                <img src={ home } alt="Bg"  className="w-[400px] h-[400px] rounded-lg"/>
            </div>
            <div className="flex flex-row h-">
                <div className="">
                    <LuSalad className=""/>
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
    )
};