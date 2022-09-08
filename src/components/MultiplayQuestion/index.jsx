import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './multiquestion.css';

const MultiplayQuestion=({  currQues,
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
    if(currQues>3){
      navigate("/result");
    }
    else if(selected){
      setCurrQues(currQues+1);
      setSelected();
    }else{
      alert("please select an option first!");
    }
  }
  /*
  const handleQuit=()=>{

  }

*/

    return(
        <>
       
        <div className="question">
      
       <h1 role="question" className="question">Question {currQues+1}</h1>
       <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>

        <div className="options">
          {error && <p role='alert'>something went wrong!</p>}
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
        >Quit</Button>

        <Button variant="contained" color="primary" 
        size="large" style={{width:182}} 
        onClick={handleNext}>Next Question</Button>
        </div>
       </div>
    
   
    </div>
        </>
    )
}
export default MultiplayQuestion
