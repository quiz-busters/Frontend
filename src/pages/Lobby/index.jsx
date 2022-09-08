import classes from './lobby.module.css';
import { IoMdEye } from 'react-icons/io';
import { MdPlayCircle } from 'react-icons/md'; 
import { MdOutlineQuiz } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';
import Footer from '../../components/Footer';
import { useUserContext } from '../../context/UserContext';
import Profile from '../../images/profile.png';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';


function Lobby({setName, setScore, player}) {

    const { user } = useUserContext();
    const [player2, setPlayer2] = useState();
    const [player3, setPlayer3] = useState();
    const [player4, setPlayer4] = useState();

    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();


    console.log(params.get("username1"));
    console.log(params.get("username2"));
    console.log(params.get("username3"));
    console.log(params.get("username4"));

    setScore(0)

    const handlepage=(username)=>{
        navigate("/multiplayform");
        setName(username)
    }
  
  /*  useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, [user]);*/

    useEffect(() => {
        setParams({
            username1: user?.username,
            username2:player.player2 || params.get("username2"),
            username3:player.player3 || params.get("username3"),
            username4:player.player4 || params.get("username4")
        })
    },[player])

    useEffect(() => {
        console.log("params changed", params.get("username2"));
        ( async () => {
            const res = await axios.get(`https://quiz-busters.herokuapp.com/users/${params.get("username2")}`)
            console.log(res.data)
            setPlayer2(res.data)
        })()
    }, [params.get("username2")]);

    useEffect(() => {
        console.log("params changed", params.get("username3"));
        ( async () => {
            const res = await axios.get(`https://quiz-busters.herokuapp.com/users/${params.get("username3")}`)
            console.log(res.data)
            setPlayer3(res.data)
        })()
    }, [params.get("username3")]);

    useEffect(() => {
        console.log("params changed", params.get("username4"));
        ( async () => {
            const res = await axios.get(`https://quiz-busters.herokuapp.com/users/${params.get("username4")}`)
            console.log(res.data)
            setPlayer4(res.data)
        })()
    }, [params.get("username4")]);
   

    console.log("user1 score- "+user?.score);
    console.log("player2 scor - "+player2?.score);

    
    const arr=[user?.score, player2?.score,  player3?.score, player4?.score];
    const users=[user?.username, player2?.username,  player3?.username, player4?.username];

    console.log("arr - "+arr)
       const winner=()=>{ return Math.max(...arr)}
       const scoreWinner=winner();
       console.log("scorewinner - " +scoreWinner);
       
       function showWinner () {
     if (scoreWinner == user?.score) {
        return <IoMdTrophy color='white'/>
     }
    }
       function showWinner2 () {
        if (scoreWinner == player2?.score) {
           return <IoMdTrophy color='white'/>
        }
       }
       function showWinner3 () {
        if (scoreWinner == player3?.score) {
           return <IoMdTrophy color='white'/>
        }
       }
       function showWinner4 () {
        if (scoreWinner == player4?.score) {
           return <IoMdTrophy color='white'/>
        }
       }

    //   const finalAns=()=>{ users.forEach(element => {
       
    //         console.log("element - " +element);
    //         return element
    //     })}
        
       
    //    console.log("finalans-"+ finalAns())

     
       
      


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Welcome to the Lobby!</p>
                    <p>Let's start the game!</p>
                </div>
               
            </header>


            <div></div>

            <div className={classes.scoreContainer}>
                <div>
                   {showWinner()}
                </div>
                <div  >
                    <p>{user?.username}</p><br></br>
                    <p>Score:{user?.score} </p>
                </div>
                <div>
                    <Button variant="contained"
        color="secondary"  size="large"
        style={{alignSelf:"center"}} 
       onClick={() => handlepage(user?.username)}>Start Quiz
          </Button>
          </div>

            </div>

            <div className={classes.scoreContainer}>
                <div>
                {showWinner2()}
                </div>
                <div >
                    <p>{player2?.username}</p><br></br>
                    <p>Score:{player2?.score} </p>
                </div>
                
                <div>
                    <Button variant="contained"
        color="secondary"  size="large"
        style={{alignSelf:"center"}} 
       onClick={() => handlepage(player2?.username)}>Start Quiz
          </Button>
          </div>
          </div>
            
          <div className={classes.scoreContainer}>
                <div>
                {showWinner3()}
                </div>
                <div >
                    <p>{player3?.username}</p><br></br>
                    <p>Score:{player3?.score} </p>
                </div>
                
                <div>
                    <Button variant="contained"
        color="secondary"  size="large"
        style={{alignSelf:"center"}} 
       onClick={() => handlepage(player3?.username)}>Start Quiz
          </Button>
          </div>
          </div>


          <div className={classes.scoreContainer}>
                <div>
                {showWinner4()}
                </div>
                <div >
                    <p>{player4?.username}</p><br></br>
                    <p>Score:{player4?.score} </p>
                </div>
                
                <div>
                    <Button variant="contained"
        color="secondary"  size="large"
        style={{alignSelf:"center"}} 
       onClick={() => handlepage(player4?.username)}>Start Quiz
          </Button>
          </div>
          </div>
           
        
        
            </main>
            
            <Footer/>
        </div>
    )
}

export default Lobby
