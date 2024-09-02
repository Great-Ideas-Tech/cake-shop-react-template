import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'

function Layout({children}) {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    <BackToTop/>
    </>
  )
}

export default Layout