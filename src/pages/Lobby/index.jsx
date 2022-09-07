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
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();


    console.log(params.get("username1"));
    console.log(params.get("username2"));
   
    setScore(0)

    const handlepage=(username)=>{
        navigate("/multiplayform");
        setName(username)
    }
  
    useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, [user]);

    useEffect(() => {
        setParams({
            username1: user?.username,
            username2:player.player2 || params.get("username2")
        })
    },[player])

    useEffect(() => {
        console.log("params changed", params.get("username2"));
        ( async () => {
            const res = await axios.get(`http://localhost:3000/users/${params.get("username2")}`)
            console.log(res.data)
            setPlayer2(res.data)
        })()
    }, [params.get("username2")]);


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Hey {user?.username},</p>
                    <p>Let's play a game!</p>
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

           
         
        
            </main>
            
            <Footer/>
        </div>
    )
}

export default Lobby
