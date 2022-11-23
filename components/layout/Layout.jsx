import React from 'react'
import {Navbar, Footer, DiscountLayer} from '../'
import { Toaster } from "react-hot-toast";
function Layout({children}) {


  return (
    <>
      <DiscountLayer/>
      <Navbar/>
      {children}
      <Footer/>
      <Toaster />
    </>
  )
}

export default Layout