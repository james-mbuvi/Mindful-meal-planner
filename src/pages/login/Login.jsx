import logo from "../../assets/logo.png";
import login from "../../assets/login.jpg";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  //Setting state for authentication
  const { signIn } = UserAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("")
    try{
      await signIn(email,password);
      navigate('/homepage');

    } catch(e) {
      setError(e.message)
      console.log(e.message)

    }
  }

  const handlePasswordReset = () => {
    const email = prompt("Enter your email");
    sendPasswordResetEmail(auth, email)
    alert("Password reset email sent");
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-screen object-cover' src={login} alt="Login Background" />
      </div>

      <div className='bg-white flex flex-col justify-center dark:bg-dm'>
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 dark:bg-dm dark:text-white" onSubmit={handleSubmit}>
          <div className="flex items-start justify-center mb-6 mt-2">
            <img src={logo} alt="logo" className="h-16 w-16 mt-2" />
          </div>
          <p className="text-base sm:text-lg text-center py-4 font-light">Welcome back! Kindly enter your details.</p>
          <div className="flex flex-col py-2">
            <label >Email</label>
            <input  onChange={(e) => setEmail(e.target.value)} type="text" className="py-2 px-3 border border-gray-300 rounded-lg text-black" />
          </div>
          <div className="flex flex-col py-2 relative">
            <label >Password</label>
            <div className="flex items-center py-2 px-3 border dark:bg-white border-gray-300 rounded-lg">
              <input
                type={passwordVisible ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none text-black dark:bg-white" 
              />
              <button
                type="button"
                className="ml-2 dark:bg-dm" 
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
            <p onClick={handlePasswordReset}>Forgot password?</p>
          </div>

          <div>
            <p className="flex justify-center mt-8 font-light">Don't have an account?
            <strong className="text-pickle  hover:text-pickle-lg dark:text-white dark:hover:text-pickle-lg ">
              <Link to="../signup" className="font-bold">Sign up for free</Link></strong></p>
          </div>
        </form>
      </div>
    </div>
  );
}

