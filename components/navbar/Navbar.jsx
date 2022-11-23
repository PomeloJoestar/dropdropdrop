import React, {useEffect, useState} from 'react'
import {Cart, Menu} from "../index";
import Image from "next/image";

function Navbar() {

    const [toggleCart, setToggleCart] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {

        if ((toggleCart || toggleMenu) && window.innerWidth < 1024){
            document.body.style.overflowY = "hidden"
        }

        return () => {
            document.body.style.overflowY = "auto"

        };
    }, [toggleCart, toggleMenu]);


  return (
<div className='bg-white w-full fixed top-12 box-border p-4 flex justify-center items-center shadow-md z-10 h-16'>

    <Menu state={toggleMenu} setState={setToggleMenu}/>
        <Cart state={toggleCart} setState={setToggleCart}/>

        <span className='basis-1/4 h-7 sm:h-8 md:h-9 flex justify-center'>
            {toggleMenu
                ?
                <svg onClick={() => setToggleMenu(false)} className='' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
                :
                <Image onClick={() => setToggleMenu(true)} height={28} width={28} object-fit="contain"  src={require('../../assets/images/menu.webp')} alt="Open Menu"/>
            }
        </span>

        <span className='cursor-default text-2xl basis-1/2 text-center'>
            Name
        </span>
        <span className='basis-1/4 h-7 sm:h-8 md:h-9 flex justify-center' onClick={() => setToggleCart(!toggleCart)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5137 21.4999H8.16592C5.09955 21.4999 2.74715 20.3924 3.41534 15.9347L4.19338 9.89351C4.60528 7.66925 6.02404 6.81799 7.26889 6.81799H17.4474C18.7105 6.81799 20.0469 7.73332 20.5229 9.89351L21.3009 15.9347C21.8684 19.8889 19.5801 21.4999 16.5137 21.4999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16.651 6.59836C16.651 4.21229 14.7167 2.27799 12.3306 2.27799V2.27799C11.1816 2.27312 10.078 2.72615 9.26381 3.53691C8.44963 4.34766 7.99193 5.44935 7.99194 6.59836H7.99194" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.2963 11.1018H15.2506" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.46566 11.1018H9.41989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </span>
    </div>
  )
}

export default Navbar