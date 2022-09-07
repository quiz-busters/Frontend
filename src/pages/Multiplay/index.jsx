import React from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useUserContext } from "../../context/UserContext";




const Multiplay=({setPlayer})=>{

   const { user } = useUserContext();
   

    const [error, setError] = useState(false);
    const [username1, setUsername1] = useState(user?.username);
    const [username2, setUsername2] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("submit")

        const res2 = await axios.post("/createuser", {
          username: username2
        })

        console.log(res2.data)
        setPlayer({
          player1: username1,
          player2: username2
        })
        navigate(`/lobby?username1=${username1}&username2=${username2}`);
    
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
           value={username1}
           onChange={(e) => (setUsername1(e.target.value))}
           style={{ marginBottom: 25 }}
           label="enter first player's username"
           variant="outlined"
          required/>
          

<TextField 
           value={username2}
           onChange={(e) => (setUsername2(e.target.value))}
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
