import React from 'react'
import classes from './index.module.css';

function Button({children}) {
  return (
    <button  className={classes.button}>{children}</button>
  )
}

export default Button
