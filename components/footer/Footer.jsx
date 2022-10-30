import React from 'react'
import styles from './Footer.module.css'


function Footer() {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

  return (
    <span className={styles.layout}>
        <div className={styles.footer}>
                <span className={`${styles.category} ${styles.newsletter}`}>
                    <span className={styles.title}>rejoignez notre newsletter</span>
                    <span className={styles.input}>
                        <input placeholder='Email'></input>
                        <button>rejoindre</button>
                    </span>
                </span>
                <span className={styles.category}>
                    <span className={styles.title}>à propos de nous</span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>nous contacter</span></span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>questions fréquentes</span></span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>notre marque</span></span>
                </span>
                <span className={styles.category}>
                    <span className={styles.title}>service client</span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>paiements</span></span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>livraisons</span></span>
                    <span className={styles.linkContainer}><span className={`${styles.link} ${styles.hoverUnderlineAnimation}`}>retours</span></span>
                </span>
                <span className={styles.category}>
                    <span className={styles.categories}>
                        <span className={styles.category}>
                            <span className={styles.title}>nous suivre</span>
                            <span className={styles.icons}>
                                <img alt='tiktok account' src={require('../../assets/images/tiktok.webp')}/>
                                <img alt='instagram account' src={require('../../assets/images/instagram.webp')}/>
                                <img alt='facebook account' src={require('../../assets/images/facebook.webp')}/>
                            </span>
                        </span>
                        <span className={styles.category}>
                            <span className={styles.title}>paiements sécurisés</span>
                            <img className={styles.payMethods} alt='payment methods' src='https://wearline.co/wp-content/uploads/2021/04/footer_payment_wearline.png'/>
                        </span>
                    </span>
                </span>


        </div>
        <div className={styles.legal}>
            <span className={styles.category}>
                <span className={styles.link}>cgu</span>
                <span className={styles.link}>confidentialité</span>
                <span className={styles.link}>cookies</span>
            </span>
            <span className={styles.category}>
                <span onClick={() => scrollToTop()} className={styles.upload}>
                    <img alt='back to top' src={require('../../assets/images/upload.webp')}></img>
                    <span>Retour en haut</span>
                </span>
            </span>
            <span className={styles.category}>
                <span className={styles.label}>©432Hz 2022</span>
            </span>
        </div>
    </span>
    
  )
}

export default Footer