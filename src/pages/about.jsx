import React from 'react'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Facts from './components/Facts'

function about() {
  return (
    <>
     <Banner page=' About' heading='About Us'/>
     <AboutUs/>
     <Facts/>
    </>
  )
}

export default about