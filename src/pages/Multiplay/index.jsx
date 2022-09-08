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
    const [username3, setUsername3] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("submit")

        const res2 = await axios.post("/createuser", {
          username: username2
        })

        const res3 = await axios.post("/createuser", {
          username: username3
        })

        setPlayer({
          player1: username1,
          player2: username2,
          player3: username3
        })
        navigate(`/lobby?username1=${username1}&username2=${username2}&username3=${username3}`);
    
    };
    
    return(
      <>        

        <div className="content">

        <div className="settings">
          <span style={{ fontSize: 30 }}>MultiPlayer </span>

          <div  className="settings__select">
              

<TextField  
           value={username1}
           onChange={(e) => (setUsername1(e.target.value))}
           style={{ marginBottom: 25 }}
           label="Host User"
           variant="outlined"
          required/>
          

<TextField 
           value={username2}
           onChange={(e) => (setUsername2(e.target.value))}
           style={{ marginBottom: 25 }}
           label="Add player 2"
           variant="outlined"
          required/>

<TextField 
           value={username3}
           onChange={(e) => (setUsername3(e.target.value))}
           style={{ marginBottom: 25 }}
           label="Add player 3"
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
