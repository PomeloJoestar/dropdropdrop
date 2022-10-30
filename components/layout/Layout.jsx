import React from 'react'
import {Navbar, Footer} from '../'
import DiscountLayer from '../DiscountLayer/DiscountLayer'

function Layout({children}) {


  return (
    <>
    <DiscountLayer/>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout