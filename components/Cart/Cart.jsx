import React from "react";
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
        <div className={`fixed inset-y-0 w-full ${props.state? "right-0" : "-right-full"} transition-all flex box-border py-10 px-6 bg-white max-w-screen-md`}>
            <span className='absolute inset-x-0 top-0 box-border p-2 flex justify-between items-center shadow-sm'>
                <svg className='basis-1/4 h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 relative cursor-pointer' onClick={() => props.setState(false)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
                <span className='capitalize text-2xl basis1/2'>votre panier</span>
                <span className='basis-1/4'></span>
            </span>


            {items ?
                <span className='flex flex-col items-center justify-center w-full h-full'>

                </span>
            :
                <span className='relative w-full justify-center items-center flex flex-col gap-4'>
                    <span className='capitalize text-center text-2xl font-bold'>votre panier est vide 😔</span>
                    <span className='text-gray-500 text-base text-center'>Ajoutez vos produits favoris à votre panier</span>
                    <Link href={"/"}><button className='bg-violet-500 cursor-pointer w-full rounded-lg box-border py-3 px-8 text-center flex justify-center items-center text-white font-bold text-xl tracking-wide shadow-sm' onClick={goToShop}>Boutique</button></Link>
                </span>
            }


        </div>
    )
}

export default Cart