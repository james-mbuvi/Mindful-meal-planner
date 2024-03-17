import logo from "../../assets/logo.png";
import loginImg from "../../assets/loginImg.jpg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserAuth} from "../../context/AuthContext";


export default function SignUp() {

  // for setting state for the eye favicon
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    //setting state for authentication
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const {createUser} =UserAuth()

    const handleSubmit =async (e) =>{
      e.preventDefault()
      setError('')
      try{
        await createUser(name,email,password)

      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }

    }



  
  
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={loginImg} alt="Login Background" />
        </div>
  
        <div className='bg-white flex flex-col justify-center'>
          <form className="max-w-[400px] w-full mx-auto bg-white p-4" onSubmit={handleSubmit}>
            <div className="flex items-start justify-center mb-6 mt-2">
              <img src={logo} alt="logo" className="h-16 w-16 mt-2" />
            </div>
            <p className="text-base sm:text-lg text-center py-4 font-bold">CREATE ACCOUNT</p>
            <div className="flex flex-col py-2">
              <label>Full Name</label>
              <input type="text" className="py-2 px-3 border border-gray-300 rounded-lg" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="flex flex-col py-2">
              <label>Email Address</label>
              <input type="text" className="py-2 px-3 border border-gray-300 rounded-lg" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col py-2 relative">
              <label>Password</label>
              <div className="flex items-center py-2 px-3 border border-gray-300 rounded-lg" onChange={(e)=>setPassword(e.target.value)}>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="w-full focus:outline-none" 
                />
                <button
                  type="button"
                  className="ml-2" 
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
  
            <div className="flex justify-center">
              <button className="border w-full my-5 py-2 bg-lime-800 hover:bg-lime-600 text-white px-3 h-14">SIGN UP</button>
            </div>

            <div>
              <p className="flex justify-right mt-8 font-light">Already have an account?<strong><Link to="/" className="font-bold">Log In</Link></strong></p>
            </div>
  
          </form>
        </div>
      </div>
    );
  }

