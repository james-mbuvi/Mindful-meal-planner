import { Routes, Route, useLocation } from 'react-router-dom';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Homepage } from './pages/homepage/Homepage';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { Navbar } from './components/navbar/Navbar';
import { Mealplanner } from './pages/Mealplan/Mealplan';
import { Recipe } from './pages/recipes/Recipe';


function App() {
  const location = useLocation();

  return (
    <div>
      <AuthContextProvider>
        {location.pathname !== "/" && location.pathname !== "/signup" && (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyMealPlan"
            element={
              <ProtectedRoute>
                <Mealplanner/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <ProtectedRoute>
                <Recipe />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

   
