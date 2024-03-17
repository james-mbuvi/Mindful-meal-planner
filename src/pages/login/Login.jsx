import logo from "../../assets/logo.png";
import loginImg from "../../assets/loginImg.jpg";
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
          <img className='w-full h-full object-cover' src={loginImg} alt="Login Background" />
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
              <button className="border w-full my-5 py-2 bg-lime-800 hover:bg-lime-600 text-white px-3 h-14">LOG IN</button>
            </div>
  
            <div className=" flex justify-between font-light">
               <p className="flex items-center mr-2"><input type="checkbox" />Remember me?</p>
               <p>forgot password</p>

            </div>
  
            <div className="flex justify-center mt-10 font-light">
              <p>SIGN IN WITH <a href="https://www.google.com"><strong>GOOGLE</strong></a>.</p>
            </div>
  
            <div>
              <p className="flex justify-center mt-8 font-light">Don't have an account?<strong><Link to="../signup" className="font-bold">Sign up for free</Link></strong></p>
            </div>
          </form>
        </div>
      </div>
    );
  }

