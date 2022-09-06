import React from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import Categories from "../../Data/Categories";
import "./quizform.css";



const QuizForm=({name,setName,fetchQuestions})=>{

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
   // const [type, settype] = useState("");

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
      if (!category || !difficulty || !name) {
        setError(true);
        alert("Please select all the option!")
        return;
      } else {
        setError(false);

        fetchQuestions(category, difficulty);
        navigate("/quiz");
      }
    };
    
    return(
      <>        

        <div aria-label="game-selection"  className="content">

        <div className="settings">
          <span style={{ fontSize: 30 }}>QUIZ TIME</span>

          <div  className="settings__select">
            <TextField role="textbox"
           
              style={{ marginBottom: 25 }}
              label="Enter Your username"
              variant="outlined"
              onChange={(e) => setName(e.target.value)} required/>

            <TextField 
              select
              label="Select Category"
              variant="outlined"
              aria-label="category"
              style={{ marginBottom: 30 }}
              value={category}
            onChange={(e) => setCategory(e.target.value)}
             >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

           

            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 30 }}
              value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>

          

           

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz
            </Button>
           
          </div>
        </div>
        
      </div>
      
      </>
    )
}
export default QuizForm
