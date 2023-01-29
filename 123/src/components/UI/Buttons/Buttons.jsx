import React from 'react'
import classes from './MyButtons.module.css';

const Buttons = (props) => {
    const btnUpdate = (e) => {
        e.preventDafault()
    }
    return (
        <button onClick={btnUpdate} className={classes.myBtn}>
        
        {props.children}

        </button>
            
    

    )
}

export default Buttons
