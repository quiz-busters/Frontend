import React from 'react';
import classes from './index.module.css';


function Input({type, value, onChange, placeholder, Icon}) {
  return (
    <div role='myInput' className={classes.container}>
        <Icon color="#AFAFAF"/>
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default Input;
