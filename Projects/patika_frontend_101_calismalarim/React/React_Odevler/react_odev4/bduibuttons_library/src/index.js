import React from 'react'
import styles from './styles.module.css'

export const ButtonB = (props) => {
  return (<button {...props} className={styles[props.type]} onClick={props.onClick}></button>)
}
