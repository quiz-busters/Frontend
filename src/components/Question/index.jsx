import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './question.css';

const Question=({  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore})=>{

  const[selected, setSelected]= useState();
  const[error, setError]= useState(false);

  const navigate=useNavigate();

  const handleSelect=(item)=>{
    if(selected===item && selected===correct){
      return "select";
    }else if(selected=== item && selected!==correct){
      return "wrong";
    }else if(item===correct){
      return "select";
    }
  }

  const handleCheck=(item)=>{
   setSelected(item);
   if(item===correct){
     setScore(score+1);
     setError(false);
    }
  }

  const handleNext=()=>{
    if(currQues>8){
      navigate("/result");
    }else if(selected){
      setCurrQues(currQues+1);
      setSelected();
    }else{
      alert("please select an option first!");
    }
  }
  
  const handleQuit=()=>{

  }



    return(
        <>
       
        <div className="question">
      
       <h1 className="question">Question {currQues+1}</h1>
       <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>

        <div className="options">
          {error && <h1>error: something went wrong!!</h1>}
          {options && options.map(opt=>(
            
          <button onClick={()=>handleCheck(opt)} 
          className={`singleOption ${selected && handleSelect(opt)}`
          } 
          key={opt}
          disabled={selected} >{opt}</button>))}
        </div>

        <div className="controls">
        <Button variant="contained" color="secondary" 
        size="large" style={{width:182}} href="/" 
        onClick={handleQuit}>Quit</Button>

        <Button variant="contained" color="primary" 
        size="large" style={{width:182}} 
        onClick={handleNext}>Next Question</Button>
        </div>
       </div>
    
   
    </div>
        </>
    )
}
export default Question
