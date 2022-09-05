import React from 'react'
import classes from './index.module.css';
import { IoMdTrophy } from 'react-icons/io';
import { FaMedal } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

function Footer() {
  return (
    <footer className={classes.footer}>
        <div>
            <IoMdTrophy color='#5342D6'/>
            <p>Play games</p>
        </div>
        <div>
            <FaMedal color='#5342D6'/>
            <p>Leaderboard</p>
        </div>
        <div>
            <MdLogout color='#5342D6'/>
            <p>Logout</p>
        </div>
    </footer>
  )
}

export default Footer
