import classes from './index.module.css';
import { MdStars } from 'react-icons/md';
import Profile from '../../images/profile.png';

function ScoreBoardSection({user, position}) {

    return(

        <section className={classes.scoreBoardSection}>
                        <p>{position}</p>
                        <div className={classes.scoreBoardImage}>
                            <img src={user?.image && user?.image != "false" ? user?.image : Profile} />
                        </div>
                        <p className={classes.scoreBoardName}>{user?.username}</p>
                            <div className={[classes.headerScore, classes.sectionScore].join(" ")}>
                                <div><MdStars color="#FFD700"/></div>
                                <p>{user?.score}</p>
                            </div>
                    </section>
    )
}

export default ScoreBoardSection;
