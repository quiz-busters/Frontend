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
    const [player4, setPlayer4] = useState();
    console.log(user?.score, player2?.score, player3?.score, player4?.score)

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
       getCurrentUser();
    }, [params.get("username1")]);

    useEffect(() => {
        console.log("params changed", params.get("username2"));
        ( async () => {
            const res = await axios.get(`/users/${params.get("username2")}`)
            console.log(res.data)
            setPlayer2(res.data)
        })()
    }, [params.get("username2")]);

    useEffect(() => {
        console.log("params changed", params.get("username3"));
        ( async () => {
            const res = await axios.get(`/users/${params.get("username3")}`)
            console.log(res.data)
            setPlayer3(res.data)
        })()
    }, [params.get("username3")]);

    useEffect(() => {
        console.log("params changed", params.get("username4"));
        ( async () => {
            const res = await axios.get(`/users/${params.get("username4")}`)
            console.log(res.data)
            setPlayer4(res.data)
        })()
    }, [params.get("username4")]);
      
    
       function findWinner() {
        const winningScore = Math.max(user?.score, player2?.score, player3?.score, player4?.score);
        const users = [user, player2, player3, player4]
        const winningUser = users.find((user) => user?.score == winningScore)
        return winningUser;
       }
       console.log("winning score: ", findWinner());


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Welcome to the Lobby!</p>
                    <p>Let's start the game!</p>
                </div>
               
            </header>


            <h3 className={classes.winner}>Winner is {findWinner()?.username}</h3>

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
