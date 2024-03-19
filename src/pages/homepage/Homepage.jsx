import { useState } from "react";
import { LuSalad } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import home from "../../assets/home.jpg"
import { ResponsiveText } from "./ResponsiveText";
import { Preferences } from "../preferences/Preferences";



export const Homepage = () => {
    const [showPreferences, setShowPreferences] = useState(false);

    if (showPreferences) {
        return <Preferences onClose={() => setShowPreferences(false)} />;
    }

    return (
        <div className="px-6 md:px-12 lg:px-[120px] h-screen flex flex-col bg-white dark:bg-dm">
            <div className="flex flex-col md:flex-row justify-evenly font-sans">
                <div className="flex flex-col justify-center space-y-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dm dark:text-white">From chaotic kitchen to culinary Bliss:</h1>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-dm dark:text-white">Let our Meal Planner Revolutionize your<br />Routine!</h1>
                    <p className="text-lg text-center font-medium text-dm dark:text-white">Click to get started! to set your meal preferences</p>
                    <div className="flex justify-center mt-5">
                        <button
                            className="text-lg bg-pickle hover:bg-pickle-lg text-white py-2 px-4 w-48 rounded-lg h-12 font-normal transition-colors duration-200 ease-in-out"
                            onClick={() => setShowPreferences(true)}
                        >
                            Get Started
                        </button>

                        {showPreferences && (
                            <Preferences onClose={() => setShowPreferences(false)} />
                        )}
                    </div>
                </div>
                <img src={home} alt="Bg" className="hidden md:block md:w-96 md:h-80 lg:w-[500px] lg:h-[500px] rounded-lg mt-6 md:mt-0" />
            </div>
            <div className="flex flex-col md:flex-row h-auto w-auto bg-pickle justify-between rounded-lg my-auto py-9 px-4 space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <div className="flex justify-center md:justify-center lg:justify-start">
                        <LuSalad className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                    <div>
                        <p className="text-center font-medium text-lg">Nutritional Convenience</p>
                        <ResponsiveText
                            fullText="Enjoy the ease of planning balanced meals tailored to your nutritional needs, ensuring you stay on track with your health goals without sacrificing convenience."
                            shortText="Enjoy the ease of planning balanced meals..."
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <div className="flex justify-center md:justify-center lg:justify-start">
                        <TbTargetArrow className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                    <div>
                        <p className="text-center font-medium text-lg">Personalized Guidance</p>
                        <ResponsiveText
                            fullText="Receive personalized meal recommendations and expert guidance, empowering you to make healthier choices that fit your unique lifestyle and preferences."
                            shortText="Receive personalized meal ideas..."
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <div className="flex justify-center md:justify-center lg:justify-start">
                        <RiSearch2Line className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                    <div>
                        <p className="text-center font-medium text-lg">Culinary Inspiration</p>
                        <ResponsiveText
                            fullText="Unleash your creativity in the kitchen with a wealth of delicious recipes and culinary inspiration, making mealtime a delightful adventure filled with flavor and excitement."
                            shortText="Unleash your creativity in the kitchen..."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}