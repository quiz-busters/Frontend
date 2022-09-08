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

    const { user, getCurrentUser } = useUserContext();
    const [player2, setPlayer2] = useState();
    const [player3, setPlayer3] = useState();
    console.log(user?.score, player2?.score, player3?.score)

    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

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
            username3:player.player3 || params.get("username3")
        })
    },[player])

    useEffect(() => {
       getCurrentUser();
    }, [params.get("username1")]);

    useEffect(() => {
        console.log("params changed", params.get("username2"));
        ( async () => {
            const res = await axios.get(`/users/${params.get("username2")}`)
            setPlayer2(res.data)
        })()
    }, [params.get("username2")]);

    useEffect(() => {
        console.log("params changed", params.get("username3"));
        ( async () => {
            const res = await axios.get(`/users/${params.get("username3")}`)
            setPlayer3(res.data)
        })()
    }, [params.get("username3")]);
      
    
    let user1={user:user?.username, score:user?.score};
    let user2={user:player2?.username, score:player2?.score}
    let user3={user:player3?.username, score:player3?.score}

    const finalArr=[user1, user2,  user3, ];
    console.log("user check - "+user1.score);


      const winner=()=>{ return Math.max(...[user1.score, user2.score,user3.score])}
      const scoreWinner=winner();
      console.log("funct - "+winner())

      function showWinner () {
        if (scoreWinner === user?.score && scoreWinner !== 0) {
           return <IoMdTrophy color='white'/>
        } 
       }
          function showWinner2 () {
           if (scoreWinner === player2?.score && scoreWinner !== 0) {
              return <IoMdTrophy color='white'/>
           }
          }
          function showWinner3 () {
           if (scoreWinner === player3?.score && scoreWinner !== 0) {
              return <IoMdTrophy color='white'/>
           }
          }
        

    let winnerStr="";
    

     function finalAns(a){ finalArr.forEach(element => {
       if(element.score===0) {   winnerStr=""}

   else if((element.score===a&& element.user===user1.user)){
           console.log("myuser - " +user1.user);
           winnerStr="The winner is " +user1.user;
       
       
            }
            else if((element.score===a&& element.user===user2.user)){
               console.log("myuser - " +user2.user);
               winnerStr="The winner is " +user2.user;
           
           
                } else if((element.score===a&& element.user===user3.user)){
                   console.log("myuser - " +user3.user);
                   winnerStr="The winner is " +user3.user;
                   
                        }return winnerStr
       }); return winnerStr}


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Let's start the game!</p>
                </div>
               
            </header>


            <h3 className={classes.winner} id="showWinner"> {finalAns(scoreWinner)} </h3>

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

           
        
        
            </main>
            
            <Footer/>
        </div>
    )
}

export default Lobby
