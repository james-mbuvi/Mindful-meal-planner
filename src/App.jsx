import { Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from './pages/homepage/Homepage';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path='/homepage'
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

   
