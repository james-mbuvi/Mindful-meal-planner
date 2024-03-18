import logo from "../../assets/logo.png";
import login from "../../assets/login.jpg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-screen object-cover' src={login} alt="Login Background" />
        </div>
  
        <div className='bg-white flex flex-col justify-center'>
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <div className="flex items-start justify-center mb-6 mt-2">
              <img src={logo} alt="logo" className="h-16 w-16 mt-2" />
            </div>
            <p className="text-base sm:text-lg text-center py-4 font-light">Welcome back! Kindly enter your details.</p>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input type="text" className="py-2 px-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="flex flex-col py-2 relative">
              <label>Password</label>
              <div className="flex items-center py-2 px-3 border border-gray-300 rounded-lg">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="w-full focus:outline-none" // Added focus:outline-none to remove default outline on focus
                />
                <button
                  type="button"
                  className="ml-2" // Adjusted margin to align eye icon with input field
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
  
            <div className="flex justify-center">
              <button className="border w-full my-5 py-2 bg-pickle  hover:bg-pickle-lg text-white px-3 h-14">LOG IN</button>
            </div>
  
            <div className=" flex justify-end font-light hover:cursor-pointer">
               <p>Forgot password</p>
            </div>

            <div>
              <p className="flex justify-center mt-8 font-light">Don't have an account?<strong className="text-pickle  hover:text-pickle-lg"><Link to="../signup" className="font-bold">Sign up for free</Link></strong></p>
            </div>
          </form>
        </div>
      </div>
    );
  }

