import { AboutBanner, CarouselTestimonial, Footer, Navbar, Swiper } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import ProductDetails from 'components/ProductDetails'
import React from 'react'

const Productdetails = () => {
  return (
    <>
    <Navbar2/>
    <AboutBanner/>
    <ProductDetails/>
    <CarouselTestimonial/>
    <Footer/>
    </>
  )
}

export default Productdetails