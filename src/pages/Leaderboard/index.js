import classes from './index.module.css';
import Footer from '../../components/Footer';
import { useUserContext } from '../../context/UserContext';
import Profile from '../../images/profile.png';
import { MdStars } from 'react-icons/md';
import ScoreBoardSection from '../../components/ScoreBoardSection';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Leaderboard() {

    const { user } = useUserContext();
    const navigate = useNavigate();
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/login', {replace: true});
        }
    }, [user]);

    useEffect(() => {
        ( async () => {
            const res = await axios.get("/users")
            console.log(res.data)
            setUsers(res.data.users)
        })()
    }, []);

    return(
        <div  aria-label="board"  className={classes.container}>
            <main className={classes.main}>
                <header className={classes.header}>
                <div className={classes.userImage}>
                    <img src={user?.image && user?.image != "false" ? user?.image : Profile} />
                </div>
                <h2>{user?.username}</h2>
                <div className={classes.headerScore}>
                    <div><MdStars color="#FFD700"/></div>
                    <p>{user?.score}</p>
                </div>
                </header>
                <section className={classes.scoreBoard}>
                    <h3  data-testid='leadTitle'>Leaderboard</h3>
                    {users.map((user, index) => <ScoreBoardSection position={index+1} key={user._id} user={user}/>)}
                </section>
            </main>
        <Footer/>
        </div>
    )

}
export default Leaderboard;
