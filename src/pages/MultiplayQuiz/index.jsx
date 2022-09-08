import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiplayQuestion from "../../components/MultiplayQuestion";
import Timer from "../../components/Timer";
import './multiQuiz.css'

const MultiplayQuiz=({name, questions, score, setScore,setQuestions})=>{

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    const navigate = useNavigate();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions,currQues]);

  // const [message, setMessage] = useState('');
  const setStop = () => {
    console.log("current question", currQues)
    if(currQues >= 4) {
      return navigate("/result")
    }
    setCurrQues((prev) => {
      if (prev < 5) {
        return prev + 1
      }
    })
  }
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

    return(<>
    
     <div aria-label='quiz' className="quiz"> 
        <span className="subtitle">Welcome {name}</span>

      {questions ? <>
      <div className="quizInfo">
        <span>{questions[currQues].category}</span>
        <span>Score: {score}</span>
        </div>
        <div className="timer">
          <Timer setStop={() => setStop ()} currQues={currQues}/>
          </div>
        <MultiplayQuestion
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}/>
        </> : <CircularProgress/>}
        
         
            
            
       
            </div>
            </>
       
      )
}
export default MultiplayQuiz
