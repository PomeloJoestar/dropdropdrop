import React, { useEffect, useState } from 'react'
import styles from './DiscountLayer.module.css'

function DiscountLayer() {

    const labels = ["20% de réduction - code : oct20", "🚚 Livraison offerte dès 50€ d'achat"]
    const [label, setLabel] = useState(labels[0])

    useEffect(() => {
        const interval = setInterval(() => {
            if(label === labels[0]){
                setLabel(labels[1])
            }else{
                setLabel(labels[0])
            }
        }, 15000)
        return () => clearInterval(interval);
    });

      return (
        <div className={styles.layout}>
            <span className={styles.line}>{label}</span>
        </div>
      )
}

export default DiscountLayer