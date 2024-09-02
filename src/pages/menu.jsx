import React from 'react'
import Products from './components/Products'
import Offer from './components/Offer'
import Banner from './components/Banner'

function menu() {
  return (
    <>
    <Banner page='Menu & Pricing' heading='Menu & Pricing'/>
    <Products/>
    <Offer/>
    </>
  )
}

export default menu