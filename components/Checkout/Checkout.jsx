import React from "react";
import styles from '../../styles/Checkout.module.css'

const Checkout = (props) => {

    console.log(props.products)

    return(
        <div className={styles.layout}>
            <span className={styles.content}>
                🚧 Checkout 🚧
            </span>
        </div>
    )
}

export default Checkout