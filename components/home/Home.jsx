import React, {useState} from 'react'
import styles from '../../styles/Home.module.css'
import {Bundle} from "../index";
import {useRouter} from "next/router";

function Home() {

    const nb_rating = 9999
    const [bundle, setBundle] = useState({1: true, 2: false, 3: false})
    const router = useRouter()

    const buy = (props) => {
        router.push("/checkout")
    }

    const addToCart = (props) => {
        if(localStorage.getItem("itemsCount") == null){
            localStorage.setItem("itemsCount", "1")
        }else{
            localStorage.setItem("itemsCount", (parseInt(localStorage.getItem("itemsCount")) + 1).toString())
        }
        localStorage.setItem(`item${localStorage.getItem("itemsCount")}`, {name: 'Salut', mdp: "dosqdk"})

        console.log(localStorage.getItem("itemsCount"))
    }

    return (
        <span className={styles.home}>
            <img onClick={() => localStorage.setItem("items", null)} className={styles.mainPic} alt='product' src={'https://cdn.shopify.com/s/files/1/0609/1531/8959/products/BLEAME1018.jpg?v=1653807750&width=713'}/>
            <span className={styles.content}>
                <span className={styles.header}>
                    <span className={styles.productName}>Product Name</span>
                    <span className={styles.productPrice}>39€</span>
                </span>
                <span className={styles.productRating}>
                    <span className={styles.stars}>
                        <div className={styles.star}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className={styles.star}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className={styles.star}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className={styles.star}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className={styles.star}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                    </span>
                    <span className={styles.ratingNumber}>{`(${nb_rating.toLocaleString()}+ reviews)`}</span>

                </span>
                <span className={styles.productDescription}>If you’re tired of razor cuts, painful waxing or expensive lasers — our hair eraser is for you!</span>
                <span className={styles.clickables}>
                    <span className={styles.bundles}>
                        <Bundle i={1} bundle={bundle} uno={true} dos={false} tres={false} setBundle={setBundle} name={"Single"} save={8} price={39} initialPrice={47}/>
                        <Bundle i={2} bundle={bundle} uno={false} dos={true} tres={false} setBundle={setBundle} name={"Duo"} save={20} price={59} initialPrice={79}/>
                        <Bundle i={3} bundle={bundle} uno={false} dos={false} tres={true} setBundle={setBundle} name={"Trio"} save={40} price={79} initialPrice={119}/>
                    </span>
                    <span className={styles.buttons}>
                        <button onClick={() => addToCart({name: "Product Name", bundle: "Solo"})} className={styles.buyButton}>🛒 Ajouter au panier</button>
                        <button onClick={() => buy()} className={styles.buyButton}>👉🏻 Acheter maintenant</button>
                    </span>

                </span>
            </span>
        </span>
  )
}

export default Home