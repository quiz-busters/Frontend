import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Question from "../../components/Question";
import './quiz.css'

const Quiz=({name, questions, score, setScore,setQuestions})=>{

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions,currQues]);


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

        <Question 
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
export default Quiz
