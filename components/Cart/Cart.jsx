import React from "react";
import styles from '../../styles/Cart.module.css'
import Link from "next/link";

const Cart = (props) => {
/*
 console.log(localStorage.getItem("items"))

    const items = localStorage.getItem("items")
 */


    const items = undefined

    const goToShop = () => {
        props.setState(false)
    }

    return(
        <div className={`${styles.layout} ${props.state && styles.active}`}>
            <span className={styles.header}>
                <svg className={styles.close} onClick={() => props.setState(false)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
                <span className={styles.name}>votre panier</span>
                <span className={styles.close}></span>
            </span>


            {items ?
                <span className={styles.content}>

                </span>
            :
                <span className={styles.empty}>
                    <span className={styles.title}>votre panier est vide 😔</span>
                    <span className={styles.label}>Ajoutez vos produits favoris à votre panier</span>
                    <Link href={"/"}><button onClick={goToShop}>Boutique</button></Link>
                </span>
            }


        </div>
    )
}

export default Cart