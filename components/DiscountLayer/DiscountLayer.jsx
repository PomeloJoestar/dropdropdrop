import React, { useEffect, useState } from 'react'

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
        <div className='flex fixed inset-x-0 top-0 h-12 bg-violet-500 items-center z-10 justify-center'>
            <span className='font-bold uppercase text-white tracking-wider text-center text-sm px-4'>{label}</span>
        </div>
      )
}

export default DiscountLayer