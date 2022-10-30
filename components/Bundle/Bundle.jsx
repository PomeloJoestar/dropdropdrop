import React from 'react'
import styles from './Bundle.module.css'

const Bundle = (props) => {
    return(
        <div style={props.bundle[props.i]? {backgroundColor: "#CCBDFF", border: '2px solid #7069bc'} : {backgroundColor: "white", border: '2px solid #CCBDFF'}} onClick={() => props.setBundle({1: props.uno, 2: props.dos, 3: props.tres})} className={styles.layout}>
            <span className={styles.toggle}>
                <span style={props.bundle[props.i]? {backgroundColor: "#7069bc", border: "2px solid white"} : {backgroundColor: "white", border: "2px solid #7069bc"}} className={styles.toggleDot}></span>
            </span>
            <span className={styles.content}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.promo}>Vous économisez {props.save}€</span>
            </span>
            <span className={styles.prices}>
                <span className={styles.price}>{props.price}€</span>
                <span className={styles.initialPrice}>{props.initialPrice}€</span>
            </span>
        </div>
    )
}

export default Bundle
