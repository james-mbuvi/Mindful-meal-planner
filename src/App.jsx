import { Routes, Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from './pages/homepage/Homepage';
import { AuthContextProvider } from './context/AuthContext';
import Preferenes from './pages/preferences/Preferenes';

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Routes>
          <Route path = '/' element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/homepage' element = {<Homepage />}/>
          <Route path='/preferences' element = {<Preferenes/>}/>

         </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
