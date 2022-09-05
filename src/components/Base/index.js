import React from 'react';
import classes from './index.module.css';

const Base = ({children}) => (
    <div className={classes.container}>
    
    
	<header className={classes.header}></header>
	<main className={classes.main}>	
	{children}
    </main>

    </div>
)

export default Base;
