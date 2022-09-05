import { Route, Routes } from "react-router-dom";
import { Quiz, QuizForm } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useUserContext } from './context/UserContext';
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);


const fetchQuestions = async (category = "", difficulty = "") => {
  
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
console.log(data)
  setQuestions(data.results);
};

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
      <Route path="/quizform" element={<QuizForm name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
      <Route path="/quiz" element={<Quiz/>}/>


      <Route path="/*" element={<h1>Page not found!</h1>}/>
    </Routes>}
    </>
  );
}

export default App;
