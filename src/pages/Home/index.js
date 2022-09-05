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


function Home() {

    const { user } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, []);


    return(
        
        <div className={classes.container}>
            <main className={classes.main}>
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <p>Hey {user?.name},</p>
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
                <div>
                    <p>1257</p>
                    <p>Your score</p>
                </div>
                <div>
                    <IoMdEye color='#FF7A00'/>
                </div>
            </div>

            <div className={classes.newGame}>
                <header>
                    <div><MdOutlineQuiz color='white'/></div>
                    <div>
                        <p>Physics</p>
                        <p>You completed 40%</p>
                    </div>
                </header>
                <footer>
                    <div className={classes.progress}>
                        <div></div>
                    </div>
                    <div></div>
                </footer>
            </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;
