import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './result.css'
import { useUserContext } from '../../context/UserContext';
import axios from "axios";

const Result=({name, score})=>{
    const { playerScore } = useUserContext();
    console.log(name)
    const navigate = useNavigate()
    const {user} = useUserContext()

    /*const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    },[name, navigate]);*/

    // useEffect(()=>{
    //    (async() => {
    //         const res = await axios.post(`/${name}/score`, { score });
    //         console.log(res.data)
    //    })()
    // },[]);
    
    return(
        <div role='btn' className="result">
        <h3 >Player : {name}</h3>

        <p className="title">Final Score : {score}</p>
        
        <Button 
            variant="contained"
        color="secondary" size="large"
        style={{alignSelf:"center", marginTop:60}} 
          onClick={(e) => {
           
            playerScore(name, score);
                navigate(`/lobby?username1=${user?.username}&username2=${name}`)
            } }>Go To Homepage
          </Button>
        </div>
        
    )
}
export default Result
