import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainBanner from '../components/MainBanner'
import Products from '../components/Products'
import GetProducts from '../Hooks/GetProducts'

import TopBanner from '../components/TopBanner'
// import Po from '../components/Po'

const Main = () => {
  return (
    <>
    <TopBanner/>
    <Navbar/>
    <MainBanner/>
    <Products/>
    <GetProducts/>
    {/* <Po/> */}
    <Footer/>
    
     
    
    </>
    
  )
}

export default Main
