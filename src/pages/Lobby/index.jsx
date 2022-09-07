import classes from './style.css';
import { IoMdEye } from 'react-icons/io';
import { MdPlayCircle } from 'react-icons/md'; 
import { MdOutlineQuiz } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';
import Footer from '../../components/Footer';
import { useUserContext } from '../../context/UserContext';
import Profile from '../../images/profile.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';


function Lobby() {

    const { user } = useUserContext();
    const navigate = useNavigate();

    const handlepage=()=>{
        navigate("/quizform");
    }
  
    useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, [user]);


    return(
        
        <div aria-label='home' className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Hey {user?.name},</p>
                    <p>Let's play a game!</p>
                </div>
               
            </header>

            <div className={classes.scoreContainer}>
                <div>
                    <IoMdTrophy color='white'/>
                </div>
                <div aria-label='score' >
                    <p>User1</p>
                    <p>Score:0 </p>
                </div>
                <div aria-label='score' >
                    <p>User2</p>
                    <p>Score:0 </p>
                </div>
               
            </div>

           
            <div>
                    <Button variant="contained"
        color="secondary"  className="start_btn" size="large"
        style={{alignSelf:"center", marginTop:60}} 
       onClick={handlepage}>Start Quiz
          </Button>
          </div>

        
            </main>
            
            <Footer/>
        </div>
    )
}

export default Lobby
