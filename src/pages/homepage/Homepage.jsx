import { LuSalad } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import home from "../../assets/home.jpg"

export default function Homepage() {
    return (
        <div className="px-[120px]">
            <div className="flex justify-between font-sans">
                <div className="flex flex-col justify-center">
                    <h1 className="text-[35px] my-2 font-bold">From chaotic kitchen to culinary Bliss:</h1>
                    <h1 className="text-[30px] font-semibold">Let our Meal Planner Revolutionize your<br />Routine!</h1>
                    <p className="text-[18px] text-center mt-3 font-medium">Click to get started! to set your meal preferences</p>
                    <div className="flex justify-center mt-5">
                        <button
                            className="text-[18px] bg-pickle hover:bg-pickle-lg text-white py-[4px] px-[8px] w-[250px] rounded-[30px] h-[55px] font-normal">
                            Get Started
                        </button>
                    </div>
                </div>
                <img src={home} alt="Bg" className="w-[500px] h-[450px] rounded-lg" />
            </div>
            <div className="flex flex-row h-[135px] w-auto bg-pickle justify-between rounded-[10px] my-[50px] p-3">
                <div className="flex gap-[10px]">
                    <div>
                        <LuSalad className="w-[80px] h-[80px]" />
                        </div>
                    <div>
                        <p className="text-center font-medium text-[18px]">Nutritional Convenience</p>
                        <p className="text-white">Enjoy the ease of planning balanced meals tailored to your nutritional needs...</p>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <TbTargetArrow className="w-[80px] h-[80px]"/>
                    <div>
                        <p className="text-center font-medium text-[18px]">Personalized Guidance</p>
                        <p className="text-white">Receive personalized meal recommendations and expert guidance...</p>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <RiSearch2Line className="w-[80px] h-[80px]"/>
                    <div>
                        <p className="text-center font-medium text-[18px]">Culinary Inspiration</p>
                        <p className="text-white">Unleash your creativity in the kitchen with a wealth of delicious recipes...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}