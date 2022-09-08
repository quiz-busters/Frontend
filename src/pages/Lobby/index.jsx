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



     let user1={user:user?.username, score:user?.score};

     let user2={user:player2?.username, score:player2?.score}
     let user3={user:player3?.username, score:player3?.score}
     let user4={user:player4?.username, score:player4?.score}

     const finalArr=[user1, user2,  user3,user4];
     console.log("user check - "+user1.score);


       const winner=()=>{ return Math.max(...[user1.score, user2.score,user3.score, user4.score])}
       const scoreWinner=winner();
       console.log("funct - "+winner())

     let winnerStr="";
     

      function finalAns(a){ finalArr.forEach(element => {
        if(element.score===0) {   winnerStr=""}

    else if((element.score===a&& element.user===user1.user)){
            console.log("myuser - " +user1.user);
            winnerStr=user1.user;
        
        
             }
             else if((element.score===a&& element.user===user2.user)){
                console.log("myuser - " +user2.user);
                winnerStr=user2.user;
            
            
                 } else if((element.score===a&& element.user===user3.user)){
                    console.log("myuser - " +user3.user);
                    winnerStr=user3.user;
                
                
                     } else if((element.score===a&& element.user===user4.user)){
                        console.log("myuser - " +user4.user);
                        winnerStr=user4.user;
                    
                    
                         }return winnerStr
        }); return winnerStr}
        

       console.log("finalans-"+ finalAns(scoreWinner))

     
      


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Welcome to the Lobby!</p>
                    <p>Let's start the game!</p>
                    <h3 id="showWinner"> {finalAns(scoreWinner)+" winner "} </h3>
                </div>
               
            </header>


           

            <div className={classes.scoreContainer}>
                <div>
                    <IoMdTrophy color='white'/>
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
                    <IoMdTrophy color='white'/>
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
                    <IoMdTrophy color='white'/>
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
                    <IoMdTrophy color='white'/>
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
