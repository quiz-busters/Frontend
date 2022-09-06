import React from 'react'
import classes from './index.module.css';
import { IoMdTrophy } from 'react-icons/io';
import { FaMedal } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useUserContext } from '../../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {

  const { logout } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <footer role="foot" className={classes.footer}>
        <div className="item" onClick={() => {navigate('/')}}>
            <IoMdTrophy color='#5342D6'/>
            <p data-testid ='play' className={location.pathname == '/' && classes.active}>Play games</p>
        </div>
        <div className="item" onClick={() => {navigate('/leaderboard')}}>
            <FaMedal color='#5342D6'/>
            <p className={location.pathname == '/leaderboard' && classes.active}>Leaderboard</p>
        </div>
        <div className="item" onClick={logout}>
            <MdLogout color='#5342D6'/>
            <p>Logout</p>
        </div>
    </footer>
  )
}

export default Footer
