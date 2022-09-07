import { Button } from "@material-ui/core";
import React from "react";
import './result.css'
import { useUserContext } from '../../context/UserContext';

const Result=({username, score})=>{


    const { user } = useUserContext();

    const { playerScore } = useUserContext();
    console.log("username "+user?.username);
    console.log("score "+score);

    /*const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    },[name, navigate]);*/
    
    return(
        <div role='btn' className="result">
        <h3 >Player : {user?.username}</h3>

        <p className="title">Final Score : {score}</p>
       
        <Button 
            variant="contained"
        color="secondary" size="large"
        style={{alignSelf:"center", marginTop:60}} 
        href="/lobby"  onClick={(e) => {
           
            playerScore(user?.username, score) } }>Go To Homepage
          </Button>
        </div>
        
    )
}
export default Result