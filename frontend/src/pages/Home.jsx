import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArrivials from '../components/NewArrivials'
import PopularProducts from '../components/PopularProducts'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivials />
      <Banner/>
      <PopularProducts />
      <Blog />
      <Footer/>
    </>
  )
}

export default Home
