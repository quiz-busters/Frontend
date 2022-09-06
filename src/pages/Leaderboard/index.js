import classes from './index.module.css';
import Footer from '../../components/Footer';
import { useUserContext } from '../../context/UserContext';
import Profile from '../../images/profile.png';
import { MdStars } from 'react-icons/md';
import ScoreBoardSection from '../../components/ScoreBoardSection';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Leaderboard() {

    const { user } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, [user]);

    return(
        <div className={classes.container}>
            <main className={classes.main}>
                <header className={classes.header}>
                <div className={classes.userImage}>
                    <img src={user?.image && user?.image != "false" ? user?.image : Profile} />
                </div>
                <h2>{user?.username}</h2>
                <div className={classes.headerScore}>
                    <div><MdStars color="#FFD700"/></div>
                    <p>1267</p>
                </div>
                </header>
                <section className={classes.scoreBoard}>
                    <h3>Leaderboard</h3>
                    <ScoreBoardSection user={user}/>
                    <ScoreBoardSection user={user}/>
                    <ScoreBoardSection user={user}/>
                    <ScoreBoardSection user={user}/>
                </section>
            </main>
        <Footer/>
        </div>
    )

}
export default Leaderboard;
