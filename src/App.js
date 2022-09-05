import { Route, Routes } from "react-router-dom";
import { Quiz, QuizForm } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useUserContext } from './context/UserContext';
import { useEffect } from "react";


function App() {

  const { getCurrentUser, userLoading } = useUserContext();
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
    {userLoading ? <p>Loading</p> : <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/quizform" element={<QuizForm/>}/>
      <Route path="/quiz" element={<Quiz/>}/>


      <Route path="/*" element={<h1>Page not found!</h1>}/>
    </Routes>}
    </>
  );
}

export default App;
