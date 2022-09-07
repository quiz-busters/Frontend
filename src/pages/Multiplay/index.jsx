import React from "react";
import { Button, TextField } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';

const Multiplay=()=>{

    const navigate = useNavigate();

    const handleSubmit = () => {
    
        navigate("/lobby");
    
    };
    
    return(
      <>        

        <div className="content">

        <div className="settings">
          <span style={{ fontSize: 30 }}>MultiPlayer </span>

          <div  className="settings__select">
            <TextField 
           
              style={{ marginBottom: 25 }}
              label="Enter lobby name/id"
              variant="outlined"
             required/>      

<TextField 
           
           style={{ marginBottom: 25 }}
           label="enter first player's username"
           variant="outlined"
          required/>

<TextField 
           
           style={{ marginBottom: 25 }}
           label="enter second player's username"
           variant="outlined"
          required/>
          
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Join Game
            </Button>
           
          </div>
        </div>
        
      </div>
      
      </>
    )
}
export default Multiplay
