import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = (props) => {



    const closeMenu = () => {
        props.setState(false)
    }

    const MenuLink = (props) => {
        return(
            <Link href={props.link} legacyBehavior>
                <a onClick={() => closeMenu()} className='capitalize font-bold text-xl flex gap-2 transition-all hover:gap-3 visited:text-black'>
                    {props.label}
                    <Image className='h-6 w-6' alt={'link'} src={require('../../assets/images/arrowright.webp')}/>
                </a>
            </Link>
        )
    }

    const FooterLink = (props) => {
        return(
            <Link href={props.link} legacyBehavior>
                <a onClick={() => closeMenu()} className='flex w-full bottom-0 h-16 w-full flex justify-center items-center gap-2 capitalize font-bold border-t border-gray-300 text-sm border-l'>
                    {props.label}
                </a>
            </Link>
        )
    }

    return(
        <div className={`fixed top-28 inset-0 bg-white transition-all ${props.state? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <span className='flex flex-col py-10 px-6 gap-6'>
                <MenuLink label="boutique" link="/"/>
                <MenuLink label="à propos de nous" link="/aboutus"/>
                <MenuLink label="faq" link="/faq"/>
            </span>
            <div className='flex w-full absolute bottom-0 h-16'>
                <FooterLink label="mon compte" link="/account"/>
                <FooterLink label="nous contacter" link="/contactus"/>
            </div>
        </div>
    )
}

export default Menu