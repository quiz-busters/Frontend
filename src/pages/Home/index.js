import classes from './index.module.css';
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


function Home() {

    const { user } = useUserContext();
    const navigate = useNavigate();

    const handlepage=()=>{
        navigate("quizform");
    }
    const handlMultiPlayer =()=>{
        navigate("multiplay");
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
                    <p>Hey {user?.username},</p>
                    <p>Let's play a game!</p>
                </div>
                <div className={classes.rightHeader}>
                    <img src={user?.image && user?.image != "false" ? user?.image : Profile} />
                </div>
            </header>

            <div className={classes.scoreContainer}>
                <div>
                    <IoMdTrophy color='white'/>
                </div>
                <div aria-label='score' >
                    <p>Your Score : {user.score}</p>
                    
                </div>
                <div>
                    <IoMdEye color='#FF7A00'/>
                </div>
            </div>

            

            <div className={classes.newGame}>
            <div>
              <Button variant="contained"
        color="secondary"  className="start_btn" size="large"
        style={{alignSelf:"center", marginTop:60}} 
       onClick={handlepage}>Start Quiz
          </Button>
          </div>
          </div>


         
          <div>
          <div className={classes.newGame}>
            <Button variant="contained"
        color="secondary"  className="start_btn" size="large"
        style={{alignSelf:"center", marginTop:60}} 
       onClick={handlMultiPlayer}>MultiPlayer
          </Button>
          </div>
          </div>
          <br></br> 
          

            </main>
            
            <Footer/>
        </div>
    )
}

export default Home;
