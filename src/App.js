import { Route, Routes } from "react-router-dom";
import { MultiplayQuizForm, Quiz, QuizForm } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import { useUserContext } from './context/UserContext';
import { useEffect, useState } from "react";
import axios from 'axios';
import Result from "./pages/Result";
import Lobby from "./pages/Lobby";
import Multiplay from "./pages/Multiplay";
import MultiplayQuiz from "./pages/MultiplayQuiz";


function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  // const [player1,setPlayer1] = useState()
  const [player,setPlayer] = useState({
    player1: "",
    player2:"",
    player3:""
  })


const fetchQuestions = async (category = "", difficulty = "") => {
  
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=5${
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
      <Route path="/quiz" element={<Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>}/>

      <Route path="/leaderboard" element={<Leaderboard/>}/>
      <Route path="/lobby" element={<Lobby setName={setName} setScore={setScore} player={player}/>}/>
      <Route path="/multiplay" element={<Multiplay setPlayer={setPlayer} />}/>
      <Route path="/multiquiz" element={<MultiplayQuiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>}/>
      <Route path="/multiplayform" element={<MultiplayQuizForm name={name} fetchQuestions={fetchQuestions}/>}/>
      <Route path="/*" element={<h1>Page not found!</h1>}/>
      <Route path="/result" element={<Result name={name} score={score}/>} />

    </Routes>}
    </>
  );
}

export default App;
