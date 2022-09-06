import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './result.css'
const Result=({name, score})=>{

    /*const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    },[name, navigate]);*/
    
    return(
        <div role='btn' className="result">
        <h3 >Player : {name}</h3>

        <p className="title">Final Score : {score}</p>
        
        <Button variant="contained"
        color="secondary" size="large"
        style={{alignSelf:"center", marginTop:60}} 
        href="/">Go To Homepage
          </Button>
        </div>
        
    )
}
export default Result