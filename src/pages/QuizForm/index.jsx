import React from "react";
import { Button, MenuItem, TextField,Field } from "@material-ui/core";
import "./quizform.css";

const QuizForm=()=>{

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("submit form")
    }

    return(<>
      
      <div className="content">

        <div className="form_settings">
          <span style={{ fontSize: 30 }}>QUIZ TIME</span>

          <div className="select_settings">
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your username"
              variant="outlined" required/>

            <TextField type="number" variant="outlined" label="number of question" 
              style={{ marginBottom: 30 }}
               InputProps={{
                inputProps: {
                 type: 'number',
                 min: 5, max: 20,
                },
              }}
               required />


              <TextField
              select
              label="Select Category"
              variant="outlined"
              style={{ marginBottom: 30 }}>
             </TextField>

            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 30 }} >

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
              size="large"  onClick={handleSubmit}> Start Quiz </Button>
          </div>
        </div>
        
      </div>

      </>
    )
}
export default QuizForm 