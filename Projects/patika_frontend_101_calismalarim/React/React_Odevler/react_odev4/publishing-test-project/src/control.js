import React from 'react'
import styles from "./styles.module.css"
// import './button.css';

export const ButtonB = (props) => {
    return (
        <>
            <button {...props} className={styles[props.type]} onClick={props.onClick}></button>
        </>
    )
}




